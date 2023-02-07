import Link from "next/link"

import styles from "../styles/footer.module.css"


export default function Footer() {
  return (
   <footer className={styles.footer}>
            <nav className={styles.nav}>
                        <Link href={"/"} >
                            Inicio
                        </Link>
                        <Link href={"/about"}>
                            Nosotros
                        </Link>
                        <Link href={"/store"}>
                          Entradas
                        </Link>
                        <Link href={"/blog"}>
                            Blog
                        </Link>
                    </nav>
                    <p className={styles.copy}>SINAC - Todos los derechos reservados {new Date().getFullYear()}</p>
   </footer>
  )
}
