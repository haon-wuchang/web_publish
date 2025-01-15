import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Sigol from './pages/Sigol.jsx';
import CultureIcon from './pages/CultureIcon.jsx';
import NiceView from './pages/NiceView.jsx';
import Hanok from './pages/Hanok.jsx';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Layout />}/>
          <Route index element = {<Home />}/>
          <Route path='/sigol' element = {<Sigol />}/>
          <Route path='/curtureIcon' element = {<CultureIcon />}/>
          <Route path='/niceView' element = {<NiceView />}/>
          <Route path='/hanok' element = {<Hanok />}/>
        </Routes>
      </BrowserRouter>
  );
}


// 얘는 에어비앤비 만들어방 연숩 쥰내해라 자꾸 까먹으니깨 