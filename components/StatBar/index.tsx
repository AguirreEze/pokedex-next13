import styles from "./styles.module.css"

interface Iprops {
  value: number
}

export default function StatBar({ value }: Iprops) {
  return (
    <div className="d--flex">
      <strong className={styles.value}>{value}</strong>
      <div className={styles.bar}>
        <svg className={styles.barFill}>
          <rect x="0" y="0" width={`${value}px`} height="100%" fill="#0f0" />
        </svg>
      </div>
    </div>
  )
}
