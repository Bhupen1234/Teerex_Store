import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import { Box, TextField, InputAdornment, Grid, Stack ,Typography} from "@mui/material";
import { Search,SentimentDissatisfied } from "@mui/icons-material";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSnackbar } from "notistack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import CartItemContext from "../context/cartItemContext";

const Products = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const[category,setCategory] =useState([]);
  const [filteredProducts,setFilteredProducts] =useState([])
  const[searchKey,setSearchKey]=useState("") 
  const [cartItems,setCartItems] = useState([])
  
  const context = useContext(CartItemContext);
 const  {addProductToCart} = context;

  //Make API call to get the products list and store it to display the products
  const performAPICall = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      setProducts(response.data);
      setFilteredProducts(response.data)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
 

  //To check if Product is Present or not 
  const isProductPresent=(product,filterItems,isFilterFunction)=>{

  if(isFilterFunction){
   
    const { name, type, color,gender,price} = product;
    let result =filterItems.some(filterItem=>{
      if (filterItem === "250") {
        return price >= 0 && price <= 250;
      } else if (filterItem === "251") {
        return price >= 251 && price <= 450;
      } else if (filterItem === "450") {
        return price >= 450;
      } else {
      return( (type===filterItem) || (gender===filterItem) ||  (color===filterItem) );
      }
      })
   
      return result;

  }
  else{
    const { name, type, color} = product;
    let result= filterItems.every(filterItem=>{
     return(  name.toLowerCase().includes(filterItem) ||  type.toLowerCase().includes(filterItem) ||  color.toLowerCase().includes(filterItem))
     })
 
     return result;
     
  }
    
  }


  //Filter Products based on search query 

 const filterProductsBySearch =(keys)=>{
  if(keys.trim(' ')===''){
   setFilteredProducts(products)
  }
  else{
 const searchkeys= keys.toLowerCase().split(" ");
  
  const filtereddata= filteredProducts.filter((product)=>{
  
    return(isProductPresent(product,searchkeys))
  }) 

  setFilteredProducts(filtereddata)
  }

 }


 //Filter the Products on Category Click 
 const filterProductsByFilter=(category)=>{
  if(category.length===0){
    setFilteredProducts(products)
  }
  else{
  
  let isFilterFunction=true;
  const filtereddata=products.filter((product)=>{
    
    return(isProductPresent(product,category,isFilterFunction))
    
  }) 

  console.log(filtereddata)
  setFilteredProducts(filtereddata)
  }
 }




  //search operation --> whenever the user types in search box

  const performSearch=(e)=>{
   
    setSearchKey(e.target.value)
    filterProductsBySearch(e.target.value)
  }


  //By checking checkbox in Filter Component handleCategory will run

  const handleCategory =(event)=>{
  
   const {value,checked}=event.target
    if(checked){
     setCategory([...category,value]);
   
    }
    else{
      // const checkedCategory= category.filter((value)=>value!=event.target.value);
      setCategory(category.filter((fvalue)=>fvalue!==value))
    }

  }

  //Check if Item already in Cart-return Boolean
   
  // const checkItemInCart = (product) =>{
  //   let items = JSON.parse(localStorage.getItem("cartItems"))

  //   if(items===null){
  //     return false
  //   }
  //   for(let i=0;i<items.length;i++){
  //     if(items[i].id===product.id){
  //       return true
  //     }
  //   }
  //   return false
  // }

 
  //Adding Product to card

  // const addProductToCart=(product, options = { preventDuplicate: false })=>{
  
  //   if (checkItemInCart(product) && options.preventDuplicate) {
  //     enqueueSnackbar("Item already in Cart.",  { variant: "warning" })
  //   }
  //   else{

  //    setCartItems((prevState)=>[...prevState,product])
     
      
      
    
      
  //   }

  
  // }

  // useEffect(()=>{
  //   localStorage.setItem('cartItems',JSON.stringify(cartItems))
  // },[cartItems])


  useEffect(() => {
   
    performAPICall();

  
  }, []);


  
  useEffect(() => {
    // console.log(category)
    filterProductsByFilter(category)
   
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
         
            <Filter handleCategory={(e)=>handleCategory(e)}/>
          
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
            <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }} className="filter_icon" >
            <FilterAltIcon fontSize="large" color="primary" />
            
            </Box>
          </Stack>
          {filteredProducts.length !==0?
          
          (
    
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
                  <ProductCard product={product} handleAddToCart={()=>addProductToCart(product,{preventDuplicate:true})}/>
                </Grid>
              );
            })}
          </Grid>
            
          )
          :
          <>
           <Box className="loading">
                      <SentimentDissatisfied />
                      <Typography sx={{ fontWeight: "bold" }}>
                        No products found
                      </Typography>
          </Box>
          </> 
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
