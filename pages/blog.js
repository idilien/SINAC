import Layout from '../components/layout'
import Post from '../components/post'
import { Block } from '../data/blog'
import styles from "../styles/grid.module.css"

export default function Blog() {

        // const {id, title, date, article, image} = Block

    return (
    <>
            <Layout
                    title={'Blog'}
                    description={'Blog - Parques Nacionales Costa Rica'}
            >
                <main className='conatiner'>
                        <h2 className='heading'>Blog</h2>
                        <div className={styles.grid}>
                                {Block.map(post =>(
                                        <Post
                                        key={post.id}
                                        post={post}
                                        />
                                ) )}

                        </div>


                </main>
               
            </Layout>
    </>
  )
}
