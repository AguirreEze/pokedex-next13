"use client"
import ShinyButton from "components/ShinyButton"
import Image from "next/image"
import { useState } from "react"
import { PokemonData } from "types"
import styles from "./styles.module.css"

interface Iprops {
  sources: PokemonData["sprites"]
}

export default function SpriteDisplay({ sources }: Iprops) {
  const [showShiny, setShowShiny] = useState<boolean>(false)

  const getFrontSrc = () => {
    return showShiny ? sources.shiny.front : sources.default.front
  }
  const getBackSrc = () => {
    return showShiny ? sources.shiny.back : sources.default.back
  }
  return (
    <>
      <section className={styles.display}>
        <div className={`${styles.buttons} ${styles.areaButtons}`}>
          <ShinyButton onClick={() => setShowShiny(!showShiny)} />
        </div>
        <div className={`${styles.imageContainer} ${styles.imageFront}`}>
          <Image
            src={getFrontSrc()}
            alt="Pokemon"
            height="150"
            width="150"
            priority
          />
        </div>
        <div className={`${styles.imageContainer} ${styles.imageBack}`}>
          <Image
            src={getBackSrc()}
            alt="Pokemon"
            height="150"
            width="150"
            priority
          />
        </div>
      </section>
    </>
  )
}
