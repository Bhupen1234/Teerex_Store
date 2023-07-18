import CartItemContext from "./cartItemContext";
import { useState ,useEffect} from "react";
import { useSnackbar } from "notistack";

import React from 'react'

const CartItemState = ({children}) => {
    const getLocalStorageCartData=()=>{
      const localStorageCartData=localStorage.getItem("cartItems");
      return localStorageCartData ? JSON.parse(localStorageCartData) : [];

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

    const addProductToCart=(productItem, options = { preventDuplicate: false })=>{
        let product = {
          id:productItem.id,
          imageURL:productItem.imageURL,
          price:productItem.price,
          quantity:1,
          maxQuantity:productItem.quantity,
          name:productItem.name
        }
        if (checkItemInCart(product) && options.preventDuplicate) {
        
          enqueueSnackbar("Item already in Cart.",  { variant: "warning" })
        }
        else{
    
          setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems, product]; 
            return updatedCartItems
          });
        
        }  
      }

      const deleteFromCart = (productId) => {
        const updatedCartItems= cartItems.filter((item)=>item.id !==productId)

        setCartItems(updatedCartItems)
      };


      useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      },[cartItems])



    //   const removeFromCart = (productId) => {
    //     // Remove product from cart logic
    //     setCartItems(cartItems.filter(item => item.id !== productId));
    //   };
 
 
  return (
    <CartItemContext.Provider value={{addProductToCart,cartItems,setCartItems,deleteFromCart}}>
     {children}
    </CartItemContext.Provider>
  )
}

export default CartItemState
