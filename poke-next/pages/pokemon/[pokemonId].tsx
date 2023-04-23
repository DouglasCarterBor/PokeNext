import { GetStaticPaths, GetStaticProps } from 'next'

interface Pokemon {
  id: number
  name: string
  url: string
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
  return <p>{pokemon.name}</p>
}
