
import {  Button ,Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import React from 'react'
import "./Header.css"

const Header = () => {
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
          variant="text"
        >
         Products
        </Button>
        <IconButton color="primary" aria-label="add to shopping cart" >
        <ShoppingCartOutlinedIcon fontSize="large"/>
</IconButton>
        </Box>
      </Box>
  )
}

export default Header
