import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"



function Post({post}) {

    const {id, title, date, article, image} = post
  
    return (
      <article>
        <Image src={`/img/${image}.jpg`} width={600} height={400}  alt="img about" />
        <div className={styles.content}>
            <h5>{title}</h5>
            <p className={styles.date}>{date}</p>
            <p className={styles.resume}>{article}</p>
            <Link  className={styles.link}
                     href={`#`}>
                        Leer más
            </Link>
        </div>
      
      </article>
    )
}

export default Post