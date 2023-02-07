import { useState, useEffect } from 'react'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {


  
  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart-shop')) ?? [] : []
  const [cartShop, setCardShop] = useState(cartLS)
  const [windowOk, setWinfowOk] = useState(false)

  useEffect(() => {
  setWinfowOk(true)
  }, [])
  

  useEffect(() => {
    localStorage.setItem('cart-shop', JSON.stringify(cartShop))
 
  }, [cartShop])
  

  const addCartShop = park => {
  
    // Check if the park is already in the cart...
    if(cartShop.some( parkState =>  parkState.id === park.id )) {
      //Iterate to update quantity
      const updateQuantity = cartShop.map(parkState => {
        if(parkState.id === park.id){
          //rewrite quantity
          parkState.quantity = park.quantity
        }
        return parkState
      })
      //Add cartShop
      setCardShop(updateQuantity)
      
    }else{
      //New register - add cartShop 
      setCardShop([...cartShop, park])
    }
  }
  

    const updateCartShop = park =>{
      const updateCartShop = cartShop.map(parkState =>{
        if(parkState.id === park.id){
          parkState.quantity = park.quantity
        }
        return parkState
      })
      setCardShop(updateCartShop)

    }

    const deleteCartShop = id =>{
      const updateCartShop = cartShop.filter(parkState => parkState.id !== id)
      setCardShop(updateCartShop)
    }
   
  return windowOk ?  <Component {...pageProps} 
        cartShop = {cartShop}
        addCartShop = {addCartShop}
        updateCartShop={updateCartShop}
        deleteCartShop={deleteCartShop}
  />:null
}

export default MyApp
