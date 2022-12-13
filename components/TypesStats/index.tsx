import UnderlineTitle from "components/UnderlinedTitle"
import { PokemonData } from "types"

interface Iprops {
  types: PokemonData["types"]
}

type InteractionType =
  | "stronglyWeakTo"
  | "weakTo"
  | "resistantTo"
  | "stronglyResistantTo"
  | "inmuneTo"

const interactionArray = [
  ["4x from:", "stronglyWeakTo"],
  ["2x from:", "weakTo"],
  ["1/2x from:", "resistantTo"],
  ["1/4x from:", "stronglyResistantTo"],
  ["Inmune", "inmuneTo"],
]

export default function TypesStats({ types }: Iprops) {
  const getTypes = () => {
    return types.names.map((type) => type.name).join(" ")
  }

  const getTypeInteracion = (interaction: InteractionType) => {
    const arr = types[interaction]
    return arr.length ? arr.join(" ") : "none"
  }

  return (
    <section className="p--x-l">
      <UnderlineTitle>Types</UnderlineTitle>
      <p>
        Types: <strong className="uppercase">{getTypes()}</strong>
      </p>
      {interactionArray.map((interaction) => {
        return (
          <p>
            {interaction[0]}{" "}
            <strong className="uppercase">
              {getTypeInteracion(interaction[1] as InteractionType)}
            </strong>
          </p>
        )
      })}
    </section>
  )
}
