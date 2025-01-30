import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Cart from './pages/Cart.jsx';


export default function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Layout />}>
            <Route index element ={<Home />}/>
            <Route path='/signup' element = {<Signup />}/> 
            <Route path='/cart' element = {<Cart />}/> 
            <Route path='/lank' element = {<Lank />}/>  {/* 랭킹바로가기페이지  */}
            <Route path='/detailProduct' element = {<DetailProduct />}/>  {/* 상품상세페이지  */}
            
          </Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

