import UnderlineTitle from "components/UnderlinedTitle"

interface Iprops {
  experience: number
  height: number
  weight: number
}

export default function GeneralStats({ experience, height, weight }: Iprops) {
  return (
    <section className="p--x-l">
      <UnderlineTitle>General</UnderlineTitle>
      <p>
        Base Experience: <strong>{experience}</strong>
      </p>
      <p>
        Height: <strong>{height}</strong>
      </p>
      <p>
        Weight: <strong>{weight}</strong>
      </p>
    </section>
  )
}
