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
  //ㄴ-3.
  // const [cartList,setCartList] = useState([]);  수정 전 
  const [cartList,setCartList] = useState(()=>{
    try {
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList) : []; 
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 중 에러발생');
      console.log(error);      
    }    
  });  

  // ㄴ-2. 
  // const [cartCount,setCartCount] = useState(0); 수정 전 
  const [cartCount,setCartCount] = useState(()=>{
    try {
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList).length : 0; //{} 로 묶었으니까 return
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 중 에러발생');
      console.log(error);      
    }    
  }); 

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
// ㄴ.새로고침하면 카트데이터를 그대로 가져와야함
//ㄴ-1.App.js 가 로컬스토리지 의 길이를 카트카운트로 넘겨준다 => cartCount
  // 로컬스토리지는 외부에 있는거니까 얘의 길이를 가져올때 에러가 생길수있다 그래서 
  // 에러가발생할수잇는 부분이니까 참고해 라는뜻으로 try ~ catch 를 사용한다

    return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Layout cartCount ={cartCount} />} >          
              <Route index element={<Home />} /> 
              <Route path='/all' element={<Products />} /> 
              <Route path='/cart' element={<Carts />} /> 
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

