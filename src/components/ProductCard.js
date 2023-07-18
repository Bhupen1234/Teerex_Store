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

const ProductCard = ({ handleAddToCart, product }) => {
  const context = useContext(CartItemContext);
  const { cartItems } = context;

  return (
    <Card className="card">
      <CardMedia
        image={product.imageURL}
        component="img"
        alt={product.name}
        sx={{ height: "60%" }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography className="subtitle" variant="h6">
          {product.price} Rs
        </Typography>

        <Box>
          <Button
            variant="contained"
            fullWidth
            className="card-button"
            onClick={handleAddToCart}
          >
            {" "}
            <AddShoppingCartOutlined />
            ADD TO CART
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
