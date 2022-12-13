import capitalize from "utils/capitalize"

interface Iprops {
  params: {
    pokemon: string
  }
}

export default function Head({ params }: Iprops) {
  return (
    <>
      <title>{`${capitalize(params.pokemon)} | Pokedex`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
