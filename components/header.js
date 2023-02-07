import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"



export default function Header() {

    const router = useRouter()
    

  return (
        <header className={styles.header}>
            <div className={styles.nav}>
                
                    <Link legacyBehavior href={"/"}>
                      <a>
                        <div className={styles.logoFlex}>
                           <Image className={styles.img} src="/img/logo1.jpg" alt="img header" width={80} height={50}/>
                            <h1 className={styles.logo}>SINAC</h1>
                        </div>
                      </a>               
                    </Link>
                    <h2 className={styles.title}>Parques Nacionales de Costa Rica</h2>
                    <nav className={styles.navegation}>
                        <Link href={"/"} 
                                className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </Link>
                        <Link href={"/about"}
                                className={router.pathname === '/about' ? styles.active : ''}
                        >
                            Nosotros
                        </Link>
                        <Link href={"/store"}
                                className={router.pathname === '/store' ? styles.active : ''}
                        >Entradas
                        </Link>
                        <Link href={"/blog"}
                                className={router.pathname === '/blog' ? styles.active : ''}
                        >
                            Blog
                        </Link>
                        <Link legacyBehavior href={"/cartShop"}>
                            <a>
                            <Image src="/img/cartShop.png" width={30} height={25} alt="logo cart"/>
                            </a>
                        </Link>
                    </nav>
            </div>
        </header>
  )
}
