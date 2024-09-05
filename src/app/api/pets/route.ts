// src/app/api/pets/route.ts
import { NextResponse } from 'next/server';
import db from '@/libs/db';
import { getServerSession } from 'next-auth';
import authOptions from '@/libs/authOptions';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { name, species, age } = await request.json();

  try {
    const user = await db.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const pet = await db.pet.create({
      data: {
        name,
        species,
        age,
        ownerId: user.id, // Usa el ID del usuario encontrado
      },
    });

    return NextResponse.json(pet, { status: 201 });
  } catch (error) {
    console.error("Error creating pet:", error);
    return NextResponse.json({ message: 'Error creating pet' }, { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await db.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const pets = await db.pet.findMany({
      where: { ownerId: user.id },
    });

    if (pets.length === 0) {
      return NextResponse.json({ message: 'No pets found' }, { status: 404 });
    }

    return NextResponse.json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    return NextResponse.json({ message: 'Error fetching pets' }, { status: 500 });
  }
}
