import React from 'react';
import  {Outlet, Link} from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
    return (  
        <div>
            <Header>
                <Link to = '/' style={{'padding':'10px'}}>Home</Link>
                <Link to = '/login' style={{'padding':'10px'}}>CgvLoginForm</Link>
                <Link to = '/signup' style={{'padding':'10px'}}>Signup</Link>
                <Link to = '/about' style={{'padding':'10px'}}>About</Link>
                <Link to = '/support' style={{'padding':'10px'}}>Support</Link>
                <Link to = '/bestseller' style={{'padding':'10px'}}>AppBestSeller</Link>
            </Header>
            <Outlet />
            {/* <Footer>
            </Footer> */}
        </div>
    );
}
