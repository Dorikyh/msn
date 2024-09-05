// src/app/dashboard/mascotas/[id]/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Cambiado a useParams
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement // Asegúrate de incluir PointElement
} from "chart.js";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement // Asegúrate de registrar PointElement
);

interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
}

function PetDetail() {
  const { id } = useParams(); // Obtén el ID de la URL usando useParams
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [location, setLocation] = useState<LatLngTuple | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/pets/${id}`)
        .then(res => res.json())
        .then(data => {
          setPet(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching pet details:", err);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    // Generate a random number between 80 and 100
    setRandomNumber(Math.floor(Math.random() * (100 - 80 + 1)) + 80);

    // Generate random coordinates
    const randomLatitude = Math.random() * 180 - 90; // -90 to 90
    const randomLongitude = Math.random() * 360 - 180; // -180 to 180
    setLocation([randomLatitude, randomLongitude]);
  }, []);

  const data = {
    labels: Array.from({ length: 10 }, (_, i) => ``), // Example labels
    datasets: [
      {
        label: 'Sample Line Chart',
        data: Array.from({ length: 10 }, () => Math.random() * 100), // Example data
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw.toFixed(2)}`,
        },
      },
    },
  };

  if (loading) return <p>Cargando...</p>;

  if (!pet) return <p>No se encontró esta mascota :c</p>;

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold mb-4">Identificación de la Mascota</h1>
      <div className="bg-white mb-6 p-4 border dark:bg-semidark border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{pet.name}</h2>
        <p className="dark:text-white text-gray-700 mb-1"><strong>Especie:</strong> {pet.species}</p>
        <p className="text-gray-700"><strong>Edad:</strong> {pet.age}</p>
      </div>

      <h1 className="text-3xl font-bold mb-4">Salud y Estadísticas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card with Line Chart */}
        <div className="bg-white p-4 border dark:bg-semidark border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Una grafica ahi</h2>
          <Line data={data} options={options} />
        </div>

        {/* Card with Random Number */}
        <div className="bg-white p-4 border dark:bg-semidark border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Pulso cardiaco</h2>
          <p className="text-red-500 text-6xl font-bold">{randomNumber}</p>
        </div>

        {/* Empty Card */}
        <div className="bg-white p-4 border dark:bg-semidark border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Vacío</h2>
          <p className="text-gray-700">Esta tarjeta está vacía.</p>
        </div>
      </div>

      {/* Map Section */}
      <h1 className="text-3xl font-bold mb-4 mt-8">Ubicación Actual</h1>
      <div className="bg-white p-4 border dark:bg-semidark border-gray-300 rounded-lg shadow-md">
        <div style={{ height: "300px", width: "100%" }}>
          {location && (
            <MapContainer center={location} zoom={2} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location}>
                <Popup>Ubicación Aleatoria</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
}

export default PetDetail;
