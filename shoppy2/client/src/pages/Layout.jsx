import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Outlet} from 'react-router-dom';

export default function Layout({count}) {
    return (
        <div>
            <Header count={count}/>
            <Outlet />
            <Footer />
        </div>
    );
}

