import capitalize from "utils/capitalize"
import isNumber from "utils/isNumber"

interface Iprops {
  params: {
    pokemon: string
  }
}

const getPokemonByNumber = async (str: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${str}`)
    .then((res) => res.json())
    .then((res) => res.name)
}

export default async function Head({ params }: Iprops) {
  const name = isNumber(params.pokemon)
    ? await getPokemonByNumber(params.pokemon)
    : params.pokemon

  return (
    <>
      <title>{`${capitalize(name)} | Pokedex`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
