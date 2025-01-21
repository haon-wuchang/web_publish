import './styles/shoppy.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import { useState } from 'react';


export default function App() {
  const addMomCart = (cartItem) => {
    setCartList([...cartList,cartItem]);
    setCartCount(cartCount + 1);
  }  
  
  const [cartList,setCartList] = useState([]);
  
  const [cartCount,setCartCount] = useState(0);

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout cartCount ={cartCount} />} >          
            <Route index element={<Home />} /> 
            <Route path='/all' element={<Products />} /> 
            <Route path='/cart' element={<Carts cartList={cartList}/>} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/products/:pid' element={<DetailProduct addCart={addMomCart}/>} /> 
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

