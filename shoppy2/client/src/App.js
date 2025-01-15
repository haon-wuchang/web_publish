import logo from './logo.svg';
import './style/shoppy.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { useState } from 'react';

export default function App() {

  const [choice,setChoice] = useState([]);
  const [count,setCount] = useState(0);

  const selectMomCart = (cartItem) => {
    setChoice([...choice,cartItem]);
    setCount(count +1);
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Layout count={count} />}>
            <Route index element ={<Home />}/>
            <Route path='product' element = {<Products/>}/>
            <Route path='cart' element = {<Cart choice={choice}/>}/>
            <Route path='login' element = {<Login />}/>
            <Route path='signup' element = {<Signup />}/>
            <Route path='/detail/:id' 
              element = {<ProductDetail selectCart ={selectMomCart} />}/>
          </Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

