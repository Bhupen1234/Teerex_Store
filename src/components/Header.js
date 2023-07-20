import { Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import React, { useContext } from "react";
import "./Header.css";
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";
import CartItemContext from "../context/cartItemContext";

const Header = () => {
  const navigate = useNavigate();
  const context = useContext(CartItemContext)
  const  {cartItems} = context;
  return (
    <Box className="header">
      <Box className="header-title">
        <Typography variant="h5" component="h2"  onClick={() => {
            navigate("/");
          }}>
          Teerex Store
        </Typography>
      </Box>
      <Box spacing={5}>
        <Button
          className="product-button"
          onClick={() => {
            navigate("/");
          }}
          variant={window.location.pathname === "/" ? "contained" : "text"}
        >
          Products
        </Button>

       
        <Button
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => {
            navigate("/cart");
          }}
          variant={window.location.pathname === "/cart" ? "contained" : "text"}
        >
           <Badge color="secondary" badgeContent={cartItems.length}>
          <ShoppingCartOutlinedIcon fontSize="large" />
          </Badge>
        </Button>
        
      </Box>
    </Box>
  );
};

export default Header;
