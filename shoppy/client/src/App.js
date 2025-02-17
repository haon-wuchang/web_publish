import './styles/shoppy.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import CartDB from './pages/CartDB.jsx'; 
import DetailProduct from './pages/DetailProduct.jsx';
import { useEffect, useState } from 'react';
import { AuthProvider } from './auth/AuthContext.js'; 
import NewProduct from './pages/NewProduct.jsx';
import { CartProvider } from './context/cartContext.js'; 

export default function App() {







  // 이전에 햇던 작업들ㄹ ////////////////////////////
  const [cartList,setCartList] = useState(()=>{
    try {
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList) : []; 
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 중 에러발생');
      console.log(error);      
    }    
  });  

  const [cartCount,setCartCount] = useState(()=>{
    try {
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList).length : 0; 
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 중 에러발생');
      console.log(error);      
    }    
  }); 

    const refreshStorage = (updateCart,updateCartCount) => { 
      setCartList(updateCart);  
      setCartCount(updateCartCount); 
    }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartList)); 
  },[cartCount]);  
    
    const addMomCart = (cartItem) => {
      const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid && 
                                checkItem.size === cartItem.size);
      let updateCartList = [];      
      if(isCheck){
          updateCartList = cartList.map(item =>
            item.pid === cartItem.pid && item.size === cartItem.size ?
            {...item, qty:item.qty+1}
            :item
          )
      } else{
        updateCartList = [...cartList, cartItem];
        setCartCount(cartCount +1 );
      }
      setCartList(updateCartList); 
    }


    return (
    <div >
      <CartProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout />} >          
            <Route index element={<Home />} /> 
            <Route path='/all' element={<Products />} /> 
            <Route path='/cart' element={<Carts refreshStorage={refreshStorage}/>} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/products/:pid' element={<DetailProduct addCart={addMomCart}/>} /> 
            <Route path='/products/new' element={<NewProduct />} /> 
            <Route path='/cartdb' element={<CartDB />} />  
          </Route >
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      </CartProvider>
    </div>
  );
}

