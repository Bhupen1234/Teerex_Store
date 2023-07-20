import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { Button, IconButton, Stack, Card, Typography } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { SentimentDissatisfied } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {  useContext } from "react";
import CartItemContext from "../context/cartItemContext";
import { useSnackbar } from "notistack";


const CartProduct = ({cartItem,handleDecreaseQty,handleIncreaseQty,deleteFromCart}) => {
  return (
    <Card
    key={cartItem.id}
    className="cart_item"
    sx={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "100%",
      // backgroundColor: "#E9F5E1",
      margin: "15px",
      flexDirection: { xs: "column", sm: "row", md: "row" } 
    }}
    marginLeft="10px"
    marginTop="10px"
  >
    <Box
      className="image_container"
      height="6.6rem"
      width="6.6rem"
      display="flex"
      alignSelf="center"
      paddingLeft="3px"
     
    >
      <img
        src={cartItem.imageURL}
        alt={cartItem.name}
        width="100%"
        height="100%"
      />
    </Box>

    <Box
      display="flex"
      flexDirection="column"
      
      paddingLeft="10px"
      alignItems="center"
      alignSelf="center"
      sx={{ justifyContent: { xs: "center", sm: "space-between", md: "space-between" } }}
    >
      <h4>{cartItem.name}</h4>
      <h5>Rs {cartItem.price}</h5>
    </Box>

    <Stack
      direction="row"
      alignItems="center"
      display="flex"
      alignSelf="center"
    >
      <IconButton size="small" color="primary" onClick={()=>handleDecreaseQty(cartItem.id)}>
        <RemoveOutlined />
      </IconButton>
      <Box padding="0.5rem" data-testid="item-qty">
        {cartItem.quantity}
      </Box>
      <IconButton
        size="small"
        color="primary"
        onClick={() =>
          handleIncreaseQty(
            cartItem.id,
            cartItem.quantity,
            cartItem.maxQuantity
          )
        }
      >
        <AddOutlined />
      </IconButton>
    </Stack>

    <Stack
      direction="row"
      alignItems="center"
      display="flex"
      alignSelf="center"
    >
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={()=>deleteFromCart(cartItem.id)}>
        Delete
      </Button>
    </Stack>
  </Card>
  )
}




const Cart = () => {
  const context = useContext(CartItemContext);
  const { cartItems, setCartItems ,deleteFromCart} = context;
  const { enqueueSnackbar } = useSnackbar();

  //Increase the quantity of Product based on "+" Button Click
  const handleIncreaseQty = (itemId, quantity, maxQuantity) => {
    if (quantity < maxQuantity) {
      setCartItems((prevItems) => {
        return prevItems.map((item) => {
          return item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    } else {
      enqueueSnackbar("Product is OUT OF STOCK", { variant: "info" });
    }
  };

   //Decrease the quantity of Product based on "-" Button Click
  const handleDecreaseQty = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    });
  };

//To evaluate total amount
  const getTotalAmount=()=>{
    let sum=0;
    cartItems.forEach((cartItem)=>{
      sum+=(cartItem.quantity*cartItem.price)
    })

    return sum;
  }


 
  
  
  

 

  return (
    <>
      <Header />

      <Box paddingX="20px">
        {console.log(cartItems)}
        <h3 >Shopping Cart</h3>
        {cartItems === null || cartItems.length === 0 ? (
          <Box className="empty">
            <SentimentDissatisfied />
            <Typography sx={{ fontWeight: "bold" }}>
              Your Cart is Empty!
            </Typography>
          </Box>
        ) : (
          <Box
            className="cart"
            sx={{ width: { sm: "90%", xs: "90%", md: "50%" } }}
          >
            {cartItems.map((cartItem) => {
              return (
               <CartProduct cartItem={cartItem} handleDecreaseQty={handleDecreaseQty} handleIncreaseQty={handleIncreaseQty} deleteFromCart={deleteFromCart}/>
                );
            })}
           <hr/>
            <Box
              padding="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              
              <Box color="#3C3C3C" alignSelf="center"  fontWeight="700"
                fontSize="1.4rem">
             
                Total Amount
              </Box>
              <Box
                color="#3C3C3C"
                fontWeight="700"
                fontSize="1.4rem"
                alignSelf="center"
              
              >
                {/* Total value  */}
                Rs {getTotalAmount()}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Cart;
