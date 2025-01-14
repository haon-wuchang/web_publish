import logo from './logo.svg';
import './App.css';
import {Route,Routes,BrowerRouter} from 'react-router-dom';

export default function App() {
  return (
    <div >
      <BrowerRouter>
        <Routes>
          <Route path='/'element={<Layout />} >          
            <Route index element={<Home />} /> 
            <Route path='/all' element={<Products />} /> 
            <Route path='/cart' element={<Carts />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
          </Route >
        </Routes>
      </BrowerRouter>
    </div>

  );
}

