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

export default function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home />}  />
          <Route path='product' element= {<Product />}  />
          <Route path='cart' element= {<Cart />}  />
          <Route path='login' element= {<Login />}  />
          <Route path='signup' element= {<Signup />}  />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

