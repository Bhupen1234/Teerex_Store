import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import { Box, TextField, InputAdornment, Grid, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSnackbar } from "notistack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Modal from '@mui/material/Modal';


const Products = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [filteredProducts,setFilteredProducts] =useState([])
  const[searchKey,setSearchKey]=useState([]) 

  //Open and close  the Filter modal by onClick Event
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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

  //search operation --> whenever the user types in search box

  const performSearch=(e)=>{
    console.log(e.target.value)
    setSearchKey(e.target.value)
  }

  useEffect(() => {
    performAPICall();
  }, []);

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
         
            <Filter/>
          
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
              onChange={(e)=>performSearch(e)}
              
              fullWidth
            />
            <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }} className="filter_icon" onClick={handleOpen}>
            <FilterAltIcon fontSize="large" color="primary" />
            
            </Box>
          </Stack>
          
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}
        disableEnforceFocus
      >
        <Filter isCalledFromModal/>
      </Modal>
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
