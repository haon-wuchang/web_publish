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
          </Route>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

