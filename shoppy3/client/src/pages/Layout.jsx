import React from 'react';
import Header from '../conponents/Header.jsx';
import Footer from '../conponents/Footer.jsx';
import {Outlet} from 'react-router-dom';

export default function Layout({cartList}) {
    return (
        <div>
            <Header cartList={cartList}/>
            <Outlet />
            <Footer />
        </div>
    );
}

