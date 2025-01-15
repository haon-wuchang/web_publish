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

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Layout/>}>
            <Route index element ={<Home />}/>
            <Route path='product' element = {<Products/>}/>
            <Route path='cart' element = {<Cart />}/>
            <Route path='login' element = {<Login />}/>
            <Route path='signup' element = {<Signup />}/>
            <Route path='/detail/:id' element = {<ProductDetail />}/>
          </Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

