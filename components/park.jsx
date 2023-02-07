import Image from "next/image";
import Link from "next/link";
import styles from "../styles/parks.module.css"

export const Park = ({park})  => {

  const {id, name, description, price, image} = park

  return (
  
       <div className={styles.park}>
          <Image src={`/img/${image}.jpg`} width={600} height={400}  alt="img about" />

          <div className={styles.content}>
            <h3>{name}</h3>
            <p  className={styles.description}>{description}</p>
            <p  className={styles.price}>{price}$</p>
            <Link  className={styles.link}
                     href={`/parkId/${id}`}>
                        Comprar Entradas    
            </Link>
          </div>
       </div>

  
  )
}

