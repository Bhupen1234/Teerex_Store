import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import {
  Box,
  TextField,
  InputAdornment,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSnackbar } from "notistack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Drawer,
  
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import CartItemContext from "../context/cartItemContext";

const Products = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loader,setLoader] =useState(false)
  const [searchKey, setSearchKey] = useState("");

  const context = useContext(CartItemContext);
  const { addProductToCart } = context;

  //Make API call to get the products list and store it to display the products
  const performAPICall = async () => {
    setLoader(true)
    try {
      const response = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoader(false)
    } catch (error) {

      enqueueSnackbar(error.message, { variant: "error" });
      setLoader(false);
    }
  };

  const checkPriceRange = (price) => {
    if (price >= 0 && price <= 250) {
      return "0-250";
    } else if (price >= 251 && price <= 450) {
      return "251-450";
    } else {
      return "450";
    }
  };

  //To check if Product is Present or not
  const isProductPresent = (product, filterItems, isFilterFunction) => {
    if (isFilterFunction) {
      const { type, color, gender, price } = product;

      const priceRange = checkPriceRange(price);
      const colorsInCategory = filterItems
        .filter((filterItem) => filterItem.startsWith("color_"))
        .map((color) => color.substring(6));
      const genderInCategory = filterItems
        .filter((filterItem) => filterItem.startsWith("gender_"))
        .map((gender) => gender.substring(7));
      const typeInCategory = filterItems
        .filter((filterItem) => filterItem.startsWith("type_"))
        .map((type) => type.substring(5));
      const priceInCategory = filterItems
        .filter((filterItem) => filterItem.startsWith("price_"))
        .map((price) => price.substring(6));

      let result = (colorsInCategory.includes(color) || colorsInCategory.length === 0) &&
        (genderInCategory.includes(gender) || genderInCategory.length === 0) &&
        (typeInCategory.includes(type) || typeInCategory.length === 0) &&
        (priceInCategory.includes(priceRange) || priceInCategory.length === 0);

        return result;
    } else {
      const { name, type, color } = product;
      let result = filterItems.every((filterItem) => {
        return (
          name.toLowerCase().includes(filterItem) ||
          type.toLowerCase().includes(filterItem) ||
          color.toLowerCase().includes(filterItem)
        );
      });

      return result;
    }
  };

  //Filter Products based on search query

  const filterProductsBySearch = (keys) => {
    if (keys.trim(" ") === "") {
      setFilteredProducts(products);
    } else {
      const searchkeys = keys.toLowerCase().split(" ");

      const filtereddata = filteredProducts.filter((product) => {
        return isProductPresent(product, searchkeys);
      });

      setFilteredProducts(filtereddata);
    }
  };

  //Filter the Products on Category Click

  const filterProductsByFilter = (category) => {
    if (category.length === 0) {
      setFilteredProducts(products);
    } else {
      let isFilterFunction = true;
      const filtereddata = products.filter((product) => {
        return isProductPresent(product, category, isFilterFunction);
      });

      console.log(filtereddata);
      setFilteredProducts(filtereddata);
    }
  };

  //search operation --> whenever the user types in search box

  
  const performSearch = (e) => {
    setSearchKey(e.target.value);
    filterProductsBySearch(e.target.value);
  };

  //By checking checkbox in Filter Component handleCategory will run

  const handleCategory = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory([...category, value]);
    } else {
      // const checkedCategory= category.filter((value)=>value!=event.target.value);
      setCategory(category.filter((fvalue) => fvalue !== value));
    }
  };

  const toggleDrawer = (open) => {
    console.log(open);
    setOpenDrawer(open);
  };

  useEffect(() => {
    performAPICall();
  }, []);

  useEffect(() => {
    // console.log(category)
    filterProductsByFilter(category);

    // @babel/plugin-proposal-private-property-in-object
  }, [category]);
  return (
    <div>
      <Header />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ padding: "22px" }}
          className="filterBackground filter_container"
        >
          <Filter handleCategory={(e) => handleCategory(e)} />
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => toggleDrawer(false)}
          >
            <Filter handleCategory={(e) => handleCategory(e)} />
          </Drawer>
        </Grid>
        <Grid item sm={8} sx={{ padding: "22px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
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
              onChange={(e) => performSearch(e)}
              fullWidth
            />
            <Box
              sx={{ display: { xs: "block", sm: "none", md: "none" } }}
              className="filter_icon"
            >
              <FilterAltIcon
                fontSize="large"
                color="primary"
                onClick={() => toggleDrawer(true)}
              />
            </Box>
          </Stack>
          {
          loader? (<CircularProgress/>) :(
          filteredProducts.length !== 0 ? (
            <Grid container>
              {filteredProducts.map((product) => {
                return (
                  <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                    key={product.id}
                    sx={{ padding: "22px" }}
                  >
                    <ProductCard
                      product={product}
                      handleAddToCart={() =>
                        addProductToCart(product, { preventDuplicate: true })
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <>
              <Box className="loading">
                <SentimentDissatisfied />
                <Typography sx={{ fontWeight: "bold" }}>
                  No products found
                </Typography>
              </Box>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
