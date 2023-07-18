import { Box, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import "./Filter.css";
const Filter = ({isCalledFromModal,handleCategory}) => {

  return (
    
      <Box className={ isCalledFromModal? "filter-section-dekstop" : "filter-section-mobile" }>

        <Box className="filter-body">
        
       
        <h4>Color</h4>
                <div className="check-box">
                <Checkbox    value={'color_Red'} onChange={handleCategory}/> <label >Red</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"color_Blue"}  onChange={handleCategory}/> <label >Blue</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_Green"}  onChange={handleCategory}/> <label >Green</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_Black"}  onChange={handleCategory}/> <label >Black</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_Purple"}  onChange={handleCategory}/> <label >Purple</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_White"}  onChange={handleCategory}/> <label >White</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_Grey"}  onChange={handleCategory}/> <label >Grey</label>
                </div>
                <div className="check-box">
                <Checkbox   value={"color_Pink"}  onChange={handleCategory}/> <label >Pink</label>
                </div>
        

        <h4>Gender</h4>
                <div className="check-box">
                <Checkbox    value={'gender_Men'}  onChange={handleCategory}/> <label >Male</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"gender_Women"}  onChange={handleCategory}/> <label >Female</label>
                </div>

        <h4>Price</h4>
                <div className="check-box">
                <Checkbox    value={'price_0-250'}  onChange={handleCategory}/> <label >0-250Rs</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"price_251-450"}  onChange={handleCategory}/> <label >251-450</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"price_450"} onChange={handleCategory} /> <label >450 and Above</label>
                </div>
        
        <h4>Type</h4>
                <div className="check-box">
                <Checkbox    value={'type_Polo'}  onChange={handleCategory}/> <label >Polo</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"type_Hoodie"}  onChange={handleCategory} /> <label >Hoodie</label>
                </div>
                <div className="check-box">
                <Checkbox    value={"type_Basic"}  onChange={handleCategory}/> <label >Basic</label>
                </div>
               
        </Box> 


        


        
         

        
          
        
      </Box>
 
  );
};

export default Filter;
