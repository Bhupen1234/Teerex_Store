
import {  Button ,Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import React from 'react'
import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box className="header">
        <Box className="header-title">
        <Typography variant="h5" component="h2">
         Teerex Store
        </Typography>
        </Box>
        <Box spacing={5}>
        <Button
          className="product-button"
          onClick={()=>{navigate("/")}}
          variant={window.location.pathname==='/'?"contained":"text"}
        >
         Products
        </Button >
        <Button color="primary" aria-label="add to shopping cart"  onClick={()=>{navigate("/cart")}} variant={window.location.pathname==='/cart'?"contained":"text"}>
         
        <ShoppingCartOutlinedIcon fontSize="large" />
</Button>
        </Box>
      </Box>
  )
}

export default Header
