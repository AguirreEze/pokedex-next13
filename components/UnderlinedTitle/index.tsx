import styles from "./styles.module.css"

interface Iprops {
  children: string
}

export default function UnderlineTitle({ children }: Iprops) {
  return (
    <div className={`${styles.container} d--flex jc--f-end`}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  )
}
