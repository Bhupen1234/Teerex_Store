import { Box, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import "./Filter.css";
const Filter = ({isCalledFromModal}) => {
        console.log(isCalledFromModal)
  return (
    
      <Box className={ isCalledFromModal?"filter-section-dekstop":"filter-section-mobile" }>

        <Box className="filter-body">
        
       
        <h4>Color</h4>
                <div className="check-box">
                <Checkbox name=""  value={'Red'} /> <label >Red</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Blue"} /> <label >Blue</label>
                </div>
                <div className="check-box">
                <Checkbox name="" value={"Green"} /> <label >Green</label>
                </div>
        

        <h4>Gender</h4>
                <div className="check-box">
                <Checkbox name=""  value={'Male'} /> <label >Male</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Female"} /> <label >Female</label>
                </div>

        <h4>Price</h4>
                <div className="check-box">
                <Checkbox name=""  value={'250'} /> <label >0-250Rs</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"251"} /> <label >Rs251-450</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"450"} /> <label >450</label>
                </div>
        
        <h4>Type</h4>
                <div className="check-box">
                <Checkbox name=""  value={'Polo'} /> <label >Polo</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Hoodie"} /> <label >Hoodie</label>
                </div>
                <div className="check-box">
                <Checkbox name=""  value={"Basic"} /> <label >Basic</label>
                </div>
               
        </Box> 


        


        
         

        
          
        
      </Box>
 
  );
};

export default Filter;
