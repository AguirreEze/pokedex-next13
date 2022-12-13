import GeneralStats from "components/GeneralStats"
import SpriteDisplay from "components/SpriteDisplay"
import { PokemonData } from "types"

interface Iprops {
  params: {
    pokemon: string
  }
}

const getPokemonData = async (pokemon: string): Promise<PokemonData> => {
  const urlParams = new URLSearchParams({ pokemon }).toString()
  return await fetch(`http://localhost:9045/api/pokemon?${urlParams}`).then(
    (res) => res.json()
  )
}

export default async function Page({ params }: Iprops) {
  const data = await getPokemonData(params.pokemon)

  return (
    <main className="p--x-m">
      <h1 className="capitalize ta--center p--y-m">{params.pokemon}</h1>
      <SpriteDisplay sources={data.sprites} />
      <GeneralStats
        experience={data.baseExperience}
        height={data.height}
        weight={data.weight}
      />
    </main>
  )
}
