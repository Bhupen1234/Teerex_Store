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
   
    //Adding Product to Cart
    const addProductToCart=(productItem)=>{
        let product = {
          id:productItem.id,
          imageURL:productItem.imageURL,
          price:productItem.price,
          quantity:1,
          maxQuantity:productItem.quantity,
          name:productItem.name
        }
        if(product.maxQuantity===0){
           enqueueSnackbar("Product is OUT OF STOCK",{variant:"warning"})
        }
       else{
        setCartItems((prevCartItems) => {
          const updatedCartItems = [...prevCartItems, product]; 
          return updatedCartItems
        });
       }
    
          
        
         
      }


      //Deleting Product from cart
      const deleteFromCart = (productId) => {
        const updatedCartItems= cartItems.filter((item)=>item.id !==productId)

        setCartItems(updatedCartItems)
      };


      useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      },[cartItems])



 
 
  return (
    <CartItemContext.Provider value={{addProductToCart,cartItems,setCartItems,deleteFromCart}}>
     {children}
    </CartItemContext.Provider>
  )
}

export default CartItemState
