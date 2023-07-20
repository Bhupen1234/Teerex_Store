import React from "react";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,

} from "@mui/material";


const ProductCard = ({ handleAddToCart, product }) => {
 
  return (
    <Card className="card" height="100%">
      <CardMedia
        image={product.imageURL}
        component="img"
        alt={product.name}
        sx={{ height: "80%" }}
      />
      <CardContent>
        <Typography variant="h6">{product.name} for {product.gender}</Typography>
        <Typography className="subtitle" variant="h6">
          {product.price} Rs
        </Typography>

        <Box>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
