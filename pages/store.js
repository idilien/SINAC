import Layout from '../components/layout'
import { Park } from '../components/park'
import { ListParks } from '../data/parks'
import styles from "../styles/grid.module.css"

export default function Store() {


    return (
    <>
            <Layout
                    title={'Store'}
                    description={'Store - Parques Nacionales Costa Rica'}
            >
               <main className='container'>
                        <h2 className='heading'>Entradas Parques </h2>
                        
                        <div className={styles.grid}>
                                {ListParks.map(park => (
                                        <Park
                                        key={park.id}                                 
                                        park={park}
                                        />
                                        
                                ))}
                        </div>
               </main>
               
            </Layout>
    </>
  )
}


