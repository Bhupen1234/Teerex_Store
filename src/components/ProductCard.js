import React, { useContext } from "react";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import CartItemContext from "../context/cartItemContext";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ({ handleAddToCart, product }) => {
  const context = useContext(CartItemContext);
  const { cartItems } = context;
  const navigate = useNavigate();

  const getProductPresentinCart = () => {
    for (let index = 0; index < cartItems.length; index++) {
      if (cartItems[index].id === product.id) {
        return cartItems[index];
      }
    }
    return false;
  };
  let stock;
  if (getProductPresentinCart()) {
    stock = product.quantity - getProductPresentinCart().quantity;
  } else {
    stock = product.quantity;
  }

  return (
    <Card className="card" >
      <CardMedia
        image={product.imageURL}
        component="img"
        alt={product.name}
        sx={{ height: "60%" }}
      />
      <CardContent>
        <Typography variant="h6">
          {product.name} for {product.gender}
        </Typography>
        <Stack
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          
        >
          <Typography className="subtitle" variant="h6">
            {product.price} Rs
          </Typography>

          {stock === 0 ? (
            <i className="outofstock">Out of Stock</i>
          ) : (
            <i className="instock">Only {stock} left in stock</i>
          )}
        </Stack>

        <Box>
          {getProductPresentinCart() ? (
            <Button
              variant="contained"
              fullWidth
              className="card-button"
              onClick={() => navigate("/cart")}
              color="primary"
            >
              {" "}
              CHECKOUT
            </Button>
          ) : (
            <Button
              variant="outlined"
              fullWidth
              className="card-button"
              onClick={handleAddToCart}
              color="primary"
            >
              {" "}
              <AddShoppingCartOutlined />
              ADD TO CART
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
