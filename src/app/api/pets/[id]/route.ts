// src/app/api/pets/[id]/route.ts
import { NextResponse } from 'next/server';
import db from '@/libs/db';
import { getServerSession } from 'next-auth';
import authOptions from '@/libs/authOptions';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  
  // Verifica si la sesión y el usuario existen
  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const petId = parseInt(params.id, 10); // Convierte el ID a número con base 10

  if (isNaN(petId)) {
    return NextResponse.json({ message: 'Invalid pet ID' }, { status: 400 });
  }

  try {
    const pet = await db.pet.findUnique({
      where: { id: petId },
    });

    if (!pet) {
      return NextResponse.json({ message: 'Pet not found' }, { status: 404 });
    }

    // Verifica si el dueño de la mascota es el usuario de la sesión
    const owner = await db.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!owner || pet.ownerId !== owner.id) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(pet);
  } catch (error) {
    console.error("Error fetching pet:", error);
    return NextResponse.json({ message: 'Error fetching pet' }, { status: 500 });
  }
}
