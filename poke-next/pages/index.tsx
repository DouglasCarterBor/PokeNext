import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'

interface Pokemon {
  id: number
  name: string
  url: string
}

interface HomeProps {
  pokemons: Pokemon[]
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <div>
          <h1>PokeNext</h1>
          <ul>
            {pokemons.map((pokemon)=>(
              <li>
                {pokemon.name}
              </li>
            ))}
          </ul>

    </div>

  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const maxPokemons = 251
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const pokemons = data.results.map((item: any, index: number) => {
    return { ...item, id: index + 1 }
  })

  return {
    props: {
      pokemons,
    }
  }
}
