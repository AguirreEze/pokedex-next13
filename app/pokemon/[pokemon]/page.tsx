import GeneralStats from "components/GeneralStats"
import SpriteDisplay from "components/SpriteDisplay"
import StatsChart from "components/StatsChart"
import TypesStats from "components/TypesStats"
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
      <h1 className="capitalize ta--center p--y-m">{data.name}</h1>
      <SpriteDisplay sources={data.sprites} />
      <GeneralStats
        experience={data.baseExperience}
        height={data.height}
        weight={data.weight}
      />
      <TypesStats types={data.types} />
      <StatsChart stats={data.stats} />
    </main>
  )
}
