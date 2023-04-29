import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import styles from '../../styles/Pokemon.module.css'

interface Pokemon {
  id: number
  name: string
  url: string
  height: number
  weight: number
  types: {
    type: {
      name: string;
    };
  }[];
}

interface PokemonProps {
  pokemon: Pokemon
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon: { id: number, name: string, url: string }, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PokemonProps> = async (context) => {
  const id = context.params?.pokemonId

  if (!id) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: {
      pokemon: data,
    },
  }
}

export default function Pokemon({ pokemon }: PokemonProps) {
  return <div className={styles.pokemon_container}>
    <h1 className={styles.title}>{pokemon.name}</h1>
    <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={80}
        height={80}
        alt={pokemon.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className={styles.types_container}>
          <h3>Tipo:</h3>
          <p>{pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}</p>
        </div>
        <div className={styles.data_container}>
      <div className={styles.data_height}>
        <h4>Altura:</h4>
        <p>{pokemon.height * 10} cm</p>
      </div>
      <div className={styles.data_weight}>
        <h4>Peso:</h4>
        <p>{pokemon.weight / 2} Kg</p>
      </div>
      </div>

  </div>
}
