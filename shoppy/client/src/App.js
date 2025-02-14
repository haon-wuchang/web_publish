import './styles/shoppy.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import { useEffect, useState } from 'react';
import { AuthProvider } from './auth/AuthContext.js'; 
import NewProduct from './pages/NewProduct.jsx';

export default function App() {
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

  // 5-1. 카트에서 주문하기 눌러서 삭제한 로컬스토리지 재호출되면 => 카트리스트 카트카운트 업데이트 진행
    const refreshStorage = (updateCart,updateCartCount) => { // 5-2. refreshStorage를 카트한테 넘겨주기  //8-4. 카트에서 넘긴 값들 받아오기
      setCartList(updateCart);  //8-5. 
      setCartCount(updateCartCount);  //8-5. 
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
      setCartList(updateCartList); //장바구니에 새로 추가한 순으로 상품이 들어가게 된다
    }


    return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Layout cartCount ={cartCount} />} >          
              <Route index element={<Home />} /> 
              <Route path='/all' element={<Products />} /> 
              <Route path='/cart' element={<Carts refreshStorage={refreshStorage}/>} />  {/*5-3.*/}
              <Route path='/login' element={<Login />} /> 
              <Route path='/signup' element={<Signup />} /> 
              <Route path='/products/:pid' element={<DetailProduct addCart={addMomCart}/>} /> 
              <Route path='/products/new' element={<NewProduct />} /> 
            </Route >
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

