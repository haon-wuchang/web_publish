import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';
import Support from './Support.jsx';
import CgvLoginForm from '../form/CgvLoginForm.jsx';
import Signup from '../form/Signup.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<Layout />} >
                    <Route index element={<Home />} /> 
                    <Route path='/login' element={<CgvLoginForm />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='/bestseller' element={<AppBestSeller />} />
                </Route>
            </Routes>
        </BrowserRouter>
    ); 
} // path 는 Route 의 기본틀이다  => / 로 요청이오면 엘리먼트안에잇는 데이터를 실행한다
//라우터에서 컴포넌트 넣을떄는 <Home /> 이케 넣어야대 이름만 달랑 넣으면 안됨
//about 이라는 값을 받으면 About 컴포넌트를 실행한다  => http://localhost:3000/about 이렇게 주면 About 컴포넌트의 내용이 실행된다
//path 이름은 다 다르게 줘야한다

//그래서 path 로 login 페이지 만들고 join 페이지 만들고 다 할수 있다
//보통 path 에 적는 이름은 소문자 이다

// 이렇게 주소값을 쳐서 넘어가는건 불편하니까 버튼만들어서 about 버튼누르면 About 사이트로 이동할수잇게 설정한다

// Layout 은  레이아웃 틀을 만들어서 진행하려고 한다 혹은 Root 로도 쓰인다
// 이화면의 디자인은 Layout 이 잡고있다는 뜻이다.

// Layout 안에 홈 어바웃 애들이 들어가야하니까 Layout 을 포함한 Route 가 감싼형태로 작성한것이다

// path 이름이랑 컴포넌트 이름 동일하지 않아도됨 근데 헷갈릴껄 ㅋ 

//<Route index element={<Home />} /> 인덱스는 기본주소값에 보여주는 것이다  http://localhost:3000  Home 의 url 임


//    / = 루트 
