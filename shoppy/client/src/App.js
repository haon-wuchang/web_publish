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
  const [cartList,setCartList] = useState([]);  
  const [cartCount,setCartCount] = useState(0); 

  //2. cartCount 가 업데이트가 되면(addMomCart 함수가 종료되야 업데이트된느거임) cartList정보를 로컬스토리지에 저장하면 된다
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartList)); 
    // json 객체를 문자로 바꾸는건 stringify
  },[cartCount]);  //카트카운트가 변하면 콜백함수가 실행됨
  //2-1. 브라우저 로컬스토리지에 잘 들어가는지 확인 
    // =>3. 동일상품 동일사이즈 도 각각 1개씩 나온다 얘를 수량만 합쳐서 하나로 맞춰줘야댄다
    // => cartList 내용 수정 
    
    // 장바구니 추가 1-1.
    const addMomCart = (cartItem) => {
      // 3-1. 입력받은 cartItem 이 cartList 에 존재하면(동일상품,동일사이즈) qty +1 을 진행한다
      // 존재하지않으면 새로 추가  ( cartList 가 배열이라서 실행가능)
      // some은 해당하는값이 있냐 없냐만 알려주는거임 
      // 그래서 삼항으로 한번 더 체크해서 있을떄 내용 없을때 내용 넣어주면댐
      const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size)  
                              ? cartList.map((item)=>
                                (item.pid === cartItem.pid && item.size === cartItem.size) ?
                                    //item 의 qty + 1    , item은 오브젝트리터럴임
                                    {...item, qty:item.qty+1}: item    
                              ) 
                              : [...cartList,cartItem];  // 3-2.map 돌린 결과를 담은 배열을 받을 변수선언(updateCartList)
      // 3-3. useState 가 관리하는 카트리스트에 업데이트카트리스트 값 넘겨주기
      setCartList(updateCartList);  // 1-2.cartList를 로컬스토리지에 저장하면된다
      // 3-4 . 브라우저에서 qty+1 되는지 확인 
      // => 카트 눌렀을때 로컬스토리지에 저장된 데이터(pid만)가지고 db 에 가서 상품이미지,정보,가격 가져오기
      setCartCount(cartCount + 1);
    }  

    return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Layout cartCount ={cartCount} />} >          
              <Route index element={<Home />} /> 
              <Route path='/all' element={<Products />} /> 
              {/* <Route path='/cart' element={<Carts cartList={cartList}/>} /> 3-5.로컬스토리지에 카트리스트담아놧으니까 얘는 필요없음 */}
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

