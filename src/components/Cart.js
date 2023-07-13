import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { Button, IconButton, Stack, Card } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

import DeleteIcon from '@mui/icons-material/Delete';

let cartProducts = [
  {
    id: 1,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
    name: "Black Polo",
    type: "Polo",
    price: 250,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 3,
  },
  {
    id: 2,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
    name: "Blue Polo",
    type: "Polo",
    price: 350,
    currency: "INR",
    color: "Blue",
    gender: "Women",
    quantity: 3,
  },
  {
    id: 3,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/pink-polo-women.png",
    name: "Pink Polo",
    type: "Polo",
    price: 350,
    currency: "INR",
    color: "Pink",
    gender: "Women",
    quantity: 6,
  },
  {
    id: 4,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-men.png",
    name: "Black Hoodie",
    type: "Hoodie",
    price: 500,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 2,
  },
];




const ItemQuantity = ({value}) => {
  return (
    <Stack direction="row" alignItems="center" display="flex" alignSelf="center">
      <IconButton size="small" color="primary" >
        <RemoveOutlined />
      </IconButton>
      <Box padding="0.5rem" data-testid="item-qty">
        {value}
      </Box>
      <IconButton size="small" color="primary" >
        <AddOutlined />
      </IconButton>
    </Stack>
  )
}



const Cart = () => {
  return (
    <>
      <Header />

      <Box  paddingX="20px" >
        <h3>Shopping Cart</h3>
        {/* Display a Product in cart */}
        <Box className="cart"  sx={{width:{sm:"90%",xs:"90%",md:"50%"}}}>
          {cartProducts.map((cartProduct) => {
            return (
              <Box key={cartProduct.id}
                className="cart_item"
                sx={{ display: "flex", alignItems: "flex-start" ,justifyContent:"space-between",width:"100%",backgroundColor:"#E9F5E1",margin:"15px"}}
                marginLeft="10px"
              >
                <Box className="image_container" height="6.6rem" width="6.6rem">
                  <img
                    // Add product image
                    src={cartProduct.imageURL}
                    // Add product name as alt eext
                    alt={cartProduct.name}
                    width="100%"
                    height="100%"
                  />
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  paddingLeft="10px"
                >
                  <h4>{cartProduct.name}</h4>
                  <h5>Rs {cartProduct.price}</h5>
                </Box>

                <ItemQuantity value={1}/>

                <Stack direction="row" alignItems="center" display="flex" alignSelf="center">
                <Button variant="outlined" startIcon={<DeleteIcon />} >
              Delete
                 </Button>
                </Stack>
               
              </Box>
            );
          })}
          <hr/>
          <Box
          padding="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box color="#3C3C3C" alignSelf="center">
          Total Amount
          </Box>
          <Box
            color="#3C3C3C"
            fontWeight="700"
            fontSize="1.5rem"
            alignSelf="center"
            data-testid="cart-total"
          >
            {/* Total value  */}
            400Rs
          </Box>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
