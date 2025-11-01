import { Suspense } from "react";

export const dynamic = 'force-dynamic';
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ShowPokemon() {
  await sleep(1000);
  const randomPokemon = Math.floor(Math.random() * 1000) + 1;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
  const pokemonData = await pokemon.json();
  return (
    <p className="max-w-lg text-lg leading-8 text-zinc-400">
      This content was delayed by 1 second. Pokemon: {pokemonData.name}.
    </p>
  );
}

export default async function SlugPage() {
  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
        Dynamic Page
      </h1>
      <Suspense fallback={<div className="text-lg text-zinc-400">Loading...</div>}>
        <ShowPokemon />
      </Suspense>
    </>
  );
}

