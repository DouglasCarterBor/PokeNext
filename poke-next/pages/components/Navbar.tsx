import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
           <div>
            <Image src="/images/pokeball.png"
             width={30}
             height={30}
             alt="PokeNext"
             />
            <p>logo</p>
            <h1>PokeNext</h1>
           </div>
           <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">Sobre</Link>
            </li>
           </ul>
        </nav>
    )
}