import { useRouter } from "next/router"
import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import { getParkById } from "../../helpers/getParkById";
import styles from "../../styles/parks.module.css"


export default function Product({addCartShop}) {

     const [quantity, setQuantity] = useState(0)    
     const [date, setDate] = useState(0) 
//      console.log(quantity);
     console.log(date);
     const router = useRouter()
     const {id} = (router.query)
     const park = getParkById(id)
     if(park === undefined){
             return
        }
     
     const {name, description, price, image} = park
        
        const handleSubmit = e => {
           e.preventDefault()
           if(quantity < 1 || date === 0){
                   alert('Campos vacios')
                   return
           }
   
           const parkSelect = {
                   id,
                   image,
                   name,
                   price,
                   quantity,
                   date
           }
        //    console.log(parkSelect)
           addCartShop(parkSelect)
        }
        

  return (
    <Layout
            title={`Park ${name}`}
             description={` Parques Nacionales Costa Rica`}
    >
            <div className={styles.park}>
                    <Image src={`/img/${image}.jpg`} width={600} height={400}  alt="img park" />
                    <div className={styles.content}>
                    <h3>{name}</h3>
                    <p  className={styles.description}>{description}</p>
                    <p  className={styles.price}>{price}$</p>
                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >

                        <label htmlFor="date">Fecha:</label>
                        <input 
                                type="date"
                                id="date"
                               value={date}
                                onChange={ e => setDate(e.target.value)}
                        
                        />

                        <label htmlFor="tickets">Cantidad:</label>
                        <select id="tickets"
                                onChange={ e => setQuantity(+e.target.value)}
                        >
                                <option value="0"> -- Seleccione Cantidad de Entradas -- </option>
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
                        <input
                                type="submit" 
                                value="Agregar al Carrito"
                         />
                    </form>
                    </div>
            </div>
    </Layout>
  )
}
