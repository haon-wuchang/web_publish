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
  // 이렇게 들어오는 아이템객체들을 하나에 모아ㅑㅇ대니까 배열에 객체들 차곡차곡담기
  
  //장바구니 리스트 : 배열로 만들어서 아이템객체들 모아두기, 바로바로업데이트돼야하니까 useState쓴거임
  const [cartList,setCartList] = useState([]);
  
  // 장바구니 상품 갯수 저장 :  useState 생성
  const [cartCount,setCartCount] = useState(0);
  // cartCount 를 Layout 에 잇는 Header 의 carts 에 넘겨주면댐

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout cartCount ={cartCount} />} >          
            <Route index element={<Home />} /> 
            <Route path='/all' element={<Products />} /> 
            <Route path='/cart' element={<Carts />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/products/:pid' element={<DetailProduct addCart={addMomCart}/>} /> 
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// 자식껄 부모한테 줄람녀 부모의 함수 이용
