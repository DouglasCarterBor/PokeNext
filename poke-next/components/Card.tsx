import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

interface Pokemon {
    name: string;
    id: number;
    // outras propriedades do objeto Pokemon, se houver
  }

  interface CardProps {
    pokemon: Pokemon;
  }

  export default function Card({pokemon}: CardProps) {
    return (
      <div className={styles.card}>
        <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={130}
        height={130}
        alt={pokemon.name}
        />
        <p className={styles.id}>#{pokemon.id}</p>
        <h3 className={styles.title}> {pokemon.name}</h3>
        <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
      </div>
    );
  }
