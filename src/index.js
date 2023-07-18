import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from "notistack";
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from "react-router-dom";
import CartItemState from './context/CartItemState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartItemState>
  <React.StrictMode>
     <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}>
   
     <BrowserRouter>
  <ThemeProvider theme={theme}>
 
  
    <App />
  
 
  </ThemeProvider>
  </BrowserRouter>
 
  </SnackbarProvider>
  </React.StrictMode>
  </CartItemState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
