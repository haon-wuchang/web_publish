import React from 'react';
import Header from '../conponents/Header.jsx';
import Footer from '../conponents/Footer.jsx';
import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

