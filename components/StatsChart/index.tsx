import StatBar from "components/StatBar"
import UnderlineTitle from "components/UnderlinedTitle"
import { PokemonData } from "types"

interface Iprops {
  stats: PokemonData["stats"]
}

export default function StatsChart({ stats }: Iprops) {
  return (
    <section className="p--x-l">
      <UnderlineTitle>Stats</UnderlineTitle>
      {stats.map((stat) => {
        return (
          <div key={stat.name}>
            <p className="capitalize">{stat.name}</p>
            <StatBar value={stat.baseStats} />
          </div>
        )
      })}
    </section>
  )
}
