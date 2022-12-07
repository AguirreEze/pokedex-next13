import Link from "next/link"
import styles from "./styles.module.css"

interface Iprops {
  url: string
  label: string
}

export default function NavigationItem({ url, label }: Iprops) {
  return (
    <li className={`${styles.listItem} border--1 d--flex f--center br--xs`}>
      <Link href={url}>{label}</Link>
    </li>
  )
}
