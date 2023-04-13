import Image from "next/image"

import styles from '../../styles/About.module.css'

export default function About () {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Nosso projeto em Next.js tem como temática o mundo dos Pokémon, onde os usuários poderão explorar informações sobre diversas espécies, suas habilidades e características. Além disso, será possível criar uma conta e montar um time de Pokémon favoritos, interagir com outros usuários e participar de batalhas online. Tudo isso com uma interface moderna e responsiva, utilizando as tecnologias mais recentes em desenvolvimento web.</p>
            <Image
            src="/images/charizard.png"
            alt="Charizard"
            width={300}
            height={300}
            />
        </div>
    )
}