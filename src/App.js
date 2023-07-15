import logo from './logo.svg';


import Products from './components/Products';

import Cart from './components/Cart';
import {Route, Router, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Routes>
     <Route path='/cart' element={<Cart cartProducts={JSON.parse(localStorage.getItem("cartItems"))}/>}/>
     <Route path='/' element={<Products/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
