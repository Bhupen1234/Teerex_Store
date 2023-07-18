import CartItemContext from "./cartItemContext";
import { useState ,useEffect} from "react";
import { useSnackbar } from "notistack";

import React from 'react'

const CartItemState = ({children}) => {
    const getLocalStorageCartData=()=>{
      let localStorageCartData=localStorage.getItem("cartItems");
      if(localStorageCartData===null){
      return  [];
         
      }
      else{
        
        return JSON.parse(localStorageCartData)
      }
    }

    const [cartItems, setCartItems] = useState(getLocalStorageCartData());
    const { enqueueSnackbar } = useSnackbar();

    const checkItemInCart = (product) =>{
        let items = JSON.parse(localStorage.getItem("cartItems"))
    
        if(items===null){
          return false
        }
        for(let i=0;i<items.length;i++){
          if(items[i].id===product.id){
            return true
          }
        }
        return false
      }

    const addProductToCart=(product, options = { preventDuplicate: false })=>{
  
        if (checkItemInCart(product) && options.preventDuplicate) {
          console.log(true)
          enqueueSnackbar("Item already in Cart.",  { variant: "warning" })
        }
        else{
    
          setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems, product];

            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
          
        
          });
        
        }  
      }



    //   const removeFromCart = (productId) => {
    //     // Remove product from cart logic
    //     setCartItems(cartItems.filter(item => item.id !== productId));
    //   };
 
 
  return (
    <CartItemContext.Provider value={{addProductToCart,cartItems}}>
     {children}
    </CartItemContext.Provider>
  )
}

export default CartItemState
