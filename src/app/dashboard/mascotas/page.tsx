"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
}

function Mascotas() {
  const { data: session } = useSession();
  const [pets, setPets] = useState<Pet[]>([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState(0);
  const router = useRouter();

  // Fetch the pets of the authenticated user
  useEffect(() => {
    if (session) {
      fetch('/api/pets')
        .then(res => res.json())
        .then(data => setPets(data))
        .catch(err => console.error("Error fetching pets:", err));
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      return alert("Please log in to create a pet.");
    }

    const response = await fetch("/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, species, age }),
    });

    if (response.ok) {
      const newPet = await response.json();
      setPets([...pets, newPet]); // Add the new pet to the list
      setName('');
      setSpecies('');
      setAge(0);
    } else {
      alert("Error creating pet");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mascotas</h1>
      <p className="mb-6">Mire ese poco de chandosos que tiene en la casa.</p>

      {/* Form to create a new pet */}
      {session ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pet Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Create Pet
          </button>
        </form>
      ) : (
        <p>Please log in to add and view your pets.</p>
      )}
    
      {/* List of pets */}
      {pets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="dark:bg-semidark p-4 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 dark:text-slate-200 text-gray-800">
                <Link href={`/dashboard/mascotas/${pet.id}`}>
                  {pet.name}
                </Link>
              </h2>
              <p className="dark:text-slate-200 text-gray-700 mb-1">
                <strong>Especie:</strong> {pet.species}
              </p>
              <p className="dark:text-slate-200 text-gray-700">
                <strong>Edad:</strong> {pet.age}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No pets found.</p>
      )}
    </div>
  );
}

export default Mascotas;
