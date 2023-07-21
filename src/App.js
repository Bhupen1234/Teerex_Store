
import Products from './components/Products';

import Cart from './components/Cart';
import {Route, Routes } from "react-router-dom";




function App() {
 
  return (
    <div className="App">
     
      <Routes>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/' element={<Products />}/>
     </Routes>
    
     
    </div>
  );
}

export default App;
