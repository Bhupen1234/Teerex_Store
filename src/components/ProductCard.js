import React from 'react'
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
 
  Typography,
  Box
} from "@mui/material";

const ProductCard = ({product}) => {
  return (
    <Card className="card">
    <CardMedia image={product.imageURL} component="img" alt={product.name} sx={{ height: "60%" }}/>
    <CardContent>
    <Typography   variant="h6" >{product.name}</Typography>
    <Typography  className="subtitle"  variant="h6">{product.price} Rs</Typography>
  
    <Box>
    <Button  variant="contained" fullWidth className="card-button" > <AddShoppingCartOutlined/> {" "}ADD TO CART</Button>
    </Box>
    </CardContent>
    </Card>
  )
}

export default ProductCard
