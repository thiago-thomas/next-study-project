"use client"

import { useState } from "react";  

interface Pokemon {
  name: string;
  url: string;
}
  
async function getPokemons(): Promise<Pokemon[]> {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon data: " + error);
  }
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function handleFetchPokemons() {
    try {
      const data = await getPokemons();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-20 bg-teal-300 text-white">
      <h1 className="text-4xl font-bold mb-6">Pokemon</h1>
      <button
        onClick={handleFetchPokemons}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar Pokemons
      </button>
      <div className="mt-4">
      <ul className="list-disc">
        {pokemons && pokemons.map((pokemon) => (
          <li>
            {pokemon.name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}