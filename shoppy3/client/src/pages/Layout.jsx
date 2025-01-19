import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../conponents/Header.jsx';
import Footer from '../conponents/Footer.jsx';
export default function Layout({count}) {
    return (
        <div>
            <Header count={count}/>
            <Outlet />
            <Footer />
        </div>
    );
}

