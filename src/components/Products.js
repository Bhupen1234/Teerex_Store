import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import { Box, TextField, InputAdornment, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSnackbar } from "notistack";

const Products = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);

  //Make API call to get the products list and store it to display the products
  const performAPICall = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );

      setProducts(response.data);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  return (
    <div>
      <Header />
      <Grid container >
        <Grid item sm={4} sx={{ padding: "22px" }} className="filterBackground">
        <Grid container>
        <Filter />
        </Grid>
        
          
        </Grid>
        <Grid item sm={8} sx={{ padding: "22px" }}>
          <TextField
            size="small"
            InputProps={{
              className: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
            placeholder="Search for Products/Colour/Type"
            name="search"
            fullWidth
          />

          <Grid container>
            {products.map((product) => {
              return (
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  key={product.id}
                  sx={{ padding: "22px" }}
                >
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
