import { PokemonResultType, SearchType } from "types"

const INITIAL_VALUES = {
  page: "1",
  pokemonPerPage: "20",
}
const getPokemons = async (params: SearchType) => {
  const urlParams = new URLSearchParams(params).toString()
  return await fetch(
    `http://localhost:9045/api/pokemon-list?${urlParams}`
  ).then((res) => res.json())
}

interface Iprops {
  searchParams: SearchType
}

export default async function Home({ searchParams }: Iprops) {
  const { page } = searchParams
  const pokemons = await getPokemons({ ...INITIAL_VALUES, page })

  return (
    <main>
      <h1 className="ta--center">Pokedex</h1>
      <ul>
        {pokemons.map(({ name, url }: PokemonResultType) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
    </main>
  )
}
