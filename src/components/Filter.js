import { Box, Paper } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import "./Filter.css";
const Filter = ({handleCategory}) => {

  return (
    
      <Paper className= "filter-section-dekstop" elevation={3}>

        <Box className="filter-body">
        
       
        <h3>Color</h3>
                <div >
                <Checkbox    value={'color_Red'} onChange={handleCategory}   /> <label >Red</label>
                </div>
                <div  >
                <Checkbox    value={"color_Blue"}  onChange={handleCategory}  /> <label >Blue</label>
                </div>
                <div  >
                <Checkbox   value={"color_Green"}  onChange={handleCategory}  /> <label >Green</label>
                </div>
                <div  >
                <Checkbox   value={"color_Black"}  onChange={handleCategory}  /> <label >Black</label>
                </div>
                <div  >
                <Checkbox   value={"color_Purple"}  onChange={handleCategory}  /> <label >Purple</label>
                </div>
                <div  >
                <Checkbox   value={"color_White"}  onChange={handleCategory}  /> <label >White</label>
                </div>
                <div  >
                <Checkbox   value={"color_Grey"}  onChange={handleCategory}  /> <label >Grey</label>
                </div>
                <div  >
                <Checkbox   value={"color_Pink"}  onChange={handleCategory}  /> <label >Pink</label>
                </div>
        

        <h3>Gender</h3>
                <div  >
                <Checkbox    value={'gender_Men'}  onChange={handleCategory}  /> <label >Male</label>
                </div>
                <div  >
                <Checkbox    value={"gender_Women"}  onChange={handleCategory}  /> <label >Female</label>
                </div>

        <h3>Price</h3>
                <div  >
                <Checkbox    value={'price_0-250'}  onChange={handleCategory}  /> <label >0-250</label>
                </div>
                <div  >
                <Checkbox    value={"price_251-450"}  onChange={handleCategory}  /> <label >251-450</label>
                </div>
                <div  >
                <Checkbox    value={"price_450"} onChange={handleCategory}   /> <label >450 and Above</label>
                </div>
        
        <h3>Type</h3>
                <div  >
                <Checkbox    value={'type_Polo'}  onChange={handleCategory}  /> <label >Polo</label>
                </div>
                <div  >
                <Checkbox    value={"type_Hoodie"}  onChange={handleCategory}   /> <label >Hoodie</label>
                </div>
                <div  >
                <Checkbox    value={"type_Basic"}  onChange={handleCategory}  /> <label >Basic</label>
                </div>
               
        </Box> 
          
        
      </Paper>
 
  );
};

export default Filter;
