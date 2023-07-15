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
                <Checkbox name=""  value={'Red'} onChange={handleCategory}/> <label >Red</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Blue"}  onChange={handleCategory}/> <label >Blue</label>
                </div>
                <div className="check-box">
                <Checkbox name="" value={"Green"}  onChange={handleCategory}/> <label >Green</label>
                </div>
        

        <h4>Gender</h4>
                <div className="check-box">
                <Checkbox name=""  value={'Men'}  onChange={handleCategory}/> <label >Male</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Women"}  onChange={handleCategory}/> <label >Female</label>
                </div>

        <h4>Price</h4>
                <div className="check-box">
                <Checkbox name=""  value={'250'}  onChange={handleCategory}/> <label >0-250Rs</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"251"}  onChange={handleCategory}/> <label >Rs251-450</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"450"} onChange={handleCategory} /> <label >Rs 450</label>
                </div>
        
        <h4>Type</h4>
                <div className="check-box">
                <Checkbox name=""  value={'Polo'}  onChange={handleCategory}/> <label >Polo</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Hoodie"}  onChange={handleCategory} /> <label >Hoodie</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Basic"}  onChange={handleCategory}/> <label >Basic</label>
                </div>
               
        </Box> 


        


        
         

        
          
        
      </Box>
 
  );
};

export default Filter;
