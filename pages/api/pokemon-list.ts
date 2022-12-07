import type { NextApiRequest, NextApiResponse } from "next"
import { ApiResponseType, SearchType } from "types"

type Error = {
  error: string
}

const INITIAL_PARAMS = {
  offset: 20,
  limit: 1,
}

const baseURL = "https://pokeapi.co/api/v2/pokemon"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType | Error>
) {
  if (req.method === "GET") {
    const { page, pokemonPerPage } = req.query
    if (!page || !pokemonPerPage)
      return res.status(400).json({ error: "Wrong search info" })

    if (typeof page !== "string")
      return res.status(400).json({ error: "page must be a string" })

    if (typeof pokemonPerPage !== "string")
      return res.status(400).json({ error: "pokemonPerPage must be a string" })

    const params = {
      ...INITIAL_PARAMS,
      offset: `${
        parseInt(pokemonPerPage) * parseInt(page) - parseInt(pokemonPerPage)
      }`,
      limit: pokemonPerPage,
    }

    const urlParams = new URLSearchParams(params).toString()
    const headers = {
      method: "GET",
    }
    try {
      const data = await fetch(baseURL + "?" + urlParams, headers)
        .then((res) => res.json())
        .then((res) => res.results)
      return res.status(200).json(data)
    } catch {
      return res.status(400).json({ error: "Wrong Data" })
    }
  }
  return res.status(400).json({ error: "Wrong search info" })
}
