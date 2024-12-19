import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import AppAirBnbzzz from '../airbnb/AppAirBnb.jsx';
import AppAladinnnn from '../aladin/AppAladin.jsx';
import AppAvatar from '../avatar/AppAvatar.jsx';
import AppCounter from '../counter/AppCounter.jsx';
import AppOlive from '../oliveyoung/AppOlive.jsx';

export default function AppRouter2() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} > {/**layout 관련 컴포넌트 */}
                    <Route index element={<Home />}/>
                    <Route path='airbnb' element={<AppAirBnbzzz />}/>
                    <Route path='aladin' element={<AppAladinnnn />}/>
                    <Route path='avatar' element={<AppAvatar />}/>
                    <Route path='counter' element={<AppCounter />}/>
                    <Route path='olive' element={<AppOlive />}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home () {
    return (
        <h1>Home~~~~~ </h1>
    );
}

