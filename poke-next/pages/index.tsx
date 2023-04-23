import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Card from './components/Card'


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
    <>
    <div className={styles.title_container}>
     <h1 className={styles.title}>Poke<span>Next</span></h1>
     <Image src="/images/pokeball.png" width={50} height={50} alt="PokeNext"/>
    </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon)=>(
            <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>

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
