import './styles/shoppy.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout />} >          
            <Route index element={<Home />} /> 
            <Route path='/all' element={<Products />} /> 
            <Route path='/cart' element={<Carts />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/products/:pid' element={<DetailProduct/>} /> 
          </Route >
        </Routes>
      </BrowserRouter>
    </div>

  );
}
// path 를 통해 넘어온느값은 다 리액트가 관리한댕 => 리액트 훅 useParams
