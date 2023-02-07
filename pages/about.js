
import Image from 'next/image'
import Layout from '../components/layout'
import styles from "../styles/about.module.css"


export default function About() {
    return (
    <>
            <Layout
                    title={'About'}
                    description={'Nosotros - Parques Nacionales Costa Rica'}
            >
                <main className='container'>
                        <h2 className='heading'>Nosotros</h2>

                        <div className={styles.content}>
                                <Image src="/img/parrot.jpg" width={1000} height={800}  alt="img about" />
                                <div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eaque inventore hic, excepturi magni nobis deleniti quod ipsam culpa animi vel ex iste unde quidem, quia ducimus eligendi suscipit? Vitae.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eaque inventore hic, excepturi magni nobis deleniti quod ipsam culpa animi vel ex iste unde quidem, quia ducimus eligendi suscipit? Vitae.</p>
                                </div>
                        </div>
                </main>           
            </Layout>
    </>
  )
}
