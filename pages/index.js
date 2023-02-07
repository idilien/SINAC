import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import { Park } from '../components/park'
import Post from '../components/post'
import { Block } from '../data/blog'
import { ListParks } from '../data/parks'
import styles from "../styles/grid.module.css"
import stylesBio from "../styles/bios.module.css"

export default function Home() {
  return (
<>
        <Layout
            title={'Parques Nacionales Costa Rica'}
            description={'Parques Nacionales Costa Rica'}
        >
           <main className='container'>
                <h2 className='heading'>Entradas Parques Online</h2>

                <div className={styles.grid}>
                                {ListParks.map(park => (
                                        <Park
                                        key={park.id}                                 
                                        park={park}
                                        />
                                        
                                ))}
                </div>
           </main>

           <section className={stylesBio.biosfera}>
              <div className={stylesBio.grid}>
                  <div className={stylesBio.content}>
                      <h2 className='heading'>Reservas de la Biosfera</h2>
                      <p className={stylesBio.text}>Cuando en nuestro planeta la población humana era poca, la naturaleza continuaba con su ritmo de crecimiento sin grandes alteraciones y se mantenía saludable, en adecuada armonía; hasta que los humanos empezamos a aumentar significativamente cada día más y a cambiar nuestra forma de vida, explotando los recursos naturales de forma indiscriminada, al punto que se generaron algunos daños que son ya irreversibles.</p>
                      <a  className={stylesBio.link} href="discover.html">Descubre más</a>
                  </div>
              </div>
          </section>

           <section>
           <h2 className='heading'>Blog</h2>
          
                        <div className={styles.grid}>
                                {Block.map(post =>(
                                        <Post
                                        key={post.id}
                                        post={post}
                                        />
                                ) )}
                        </div>
           </section>   
        </Layout>
</>     
  )
}
