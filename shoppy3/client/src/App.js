import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/shoppy.css';
import ProductDetail from './pages/ProductDetail.jsx';
import {useState}  from 'react';

export default function App() {
  const [cart,setCart] = useState([]);
  const [count, setCount] = useState(0);

  const handleCart = (cartItem) => {    
    setCart([...cart, cartItem]);
    setCount(count+1);
  }
  console.log(cart);
  

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartList={count}/>}>
          <Route index element= {<Home />}  />
          <Route path='/product' element= {<Product />}  />
          <Route path='/cart' element= {<Cart cartList={cart}/>}  />
          <Route path='/login' element= {<Login />}  />
          <Route path='/signup' element= {<Signup />}  />
          <Route path='/productdetail/:pid' element= {<ProductDetail momCart={handleCart}/>}  />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

