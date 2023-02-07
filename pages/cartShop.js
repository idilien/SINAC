import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/cartShop.module.css"
import { formatDate } from "../helpers/helpers";


export default function CartShop({cartShop, updateCartShop, deleteCartShop}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const resulTotal = cartShop.reduce( (total, product) => total + (product.quantity * product.price), 0)
    setTotal(resulTotal)
    }, [cartShop])
  
  return (
   <>
       <Layout
            title={'Shop Cart'}
            description={'Shop Cart - Parques Nacionales Costa Rica'}
        >
            <main className="container">
                <h2 className="heading">Carrito</h2>
                <div className={styles.content}>
                    <div className={styles.cart}>
                            {/* <h2>Articulos</h2> */}
                            
                            {cartShop.length === 0 ? 'Carrito Vacio' :(
                                cartShop.map(products => ( 
                                   <div className={styles.product} key={products.id}>
                                            <div>
                                                     <Image src={`/img/${products.image}.jpg`} width={300} height={300} alt="img product"/>
                                            </div>
                                            <div>
                                            <button className={styles.delete}
                                                            type='button'
                                                            onClick={() => deleteCartShop(products.id)}
                                            >
                                                X
                                            </button>
                                                    <p className={styles.name}>{products.name} </p>
                                                    <p className={styles.price}>Fecha: <span> {formatDate( products.date)}</span></p>
                                                   <div className={styles.price}>
                                                       <p >Cantidad:</p>
                                                    <select
                                                          className={styles.select}
                                                          onChange={e => updateCartShop({
                                                            id: products.id,
                                                            quantity: +e.target.value
                                                          })}
                                                          value={products.quantity}
                                                    >
                                                            <option value="1">1 </option>
                                                            <option value="2">2 </option>
                                                            <option value="3">3 </option>
                                                            <option value="4">4 </option> 
                                                            <option value="5">5 </option> 
                                                            <option value="6">6 </option> 
                                                            <option value="7">7 </option> 
                                                            <option value="8">8 </option> 
                                                            <option value="9">9 </option> 
                                                            <option value="10">10 </option> 
                                                    </select>
                                                   </div>
                                                        <p className={styles.price}> <span> {products.price}</span>$</p>
                                                        <p className={styles.price}>Subtotal: <span> {products.quantity * products.price} </span>$</p>
                                            </div>
                                       
                                   </div>     
                                 ))          
                                 )}
                    </div>
                            <aside className={styles.resume} >
                                <h3>Resumen del pedido</h3>
                                <p>Total a pagar: {total} $</p>
                            </aside>
                </div>
             </main>
        </Layout>
   </>
  )
}
