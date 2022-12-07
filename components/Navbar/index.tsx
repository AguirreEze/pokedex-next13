"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { SyntheticEvent, useState } from "react"

export default function Navbar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"

  router.prefetch(`/?page=${parseInt(page) + 1}`)
  page !== "1" && router.prefetch(`/?page=${parseInt(page) - 1}`)

  const [display, setDisplay] = useState(page)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    router.replace(`/?page=${display}`)
  }

  const handleClick = (page: string) => {
    router.replace(`/?page=${page}`)
    setDisplay(page)
  }

  return (
    <footer className="d--flex fd--row">
      <button
        onClick={() => handleClick(`${parseInt(page) - 1}`)}
        disabled={page === "1"}
        className="flex--1"
      >
        {"<"}
      </button>
      <form onSubmit={handleSubmit} className="flex--1 h--full">
        <input
          className="ta--center h--full"
          type="number"
          value={display}
          onChange={(e) => {
            setDisplay(e.target.value)
          }}
        />
      </form>
      <button
        onClick={() => handleClick(`${parseInt(page) + 1}`)}
        className="flex--1"
      >
        {">"}
      </button>
    </footer>
  )
}
