import Link from "next/link"
import styles from './Menu.module.css'

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/'}>Inicio</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/busca'}>Busca</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'#'}>Favoritos</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/perfil'}>Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}