import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './style/shoppy.css';
import './style/login.css';
import './style/signup.css';
import ProductDetail from './pages/ProductDetail.jsx';
import { useState } from 'react';


export default  function App() {
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);

  const momCart = (cartItem) => {
    setCartList([...cartList, cartItem]);  
    setCount(count+1);  
  }

  

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout count={count}/>}>
            <Route index element={<Home />} />
            <Route path='/product' element = {<Product />}/>
            <Route path='/cart' element = {<Cart count={count} cartList={cartList}/>}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/signup' element = {<Signup />}/>
            <Route path='/product/detail/:pid' element = {<ProductDetail handleCarts={momCart}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


