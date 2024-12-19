import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to=''>Home</Link>
                <Link to='airbnb' style={{'padding':'20px'}}>Airbnb</Link>
                <Link to='aladin' style={{'padding':'20px'}}>Aladin</Link>
                <Link to='avatar' style={{'padding':'20px'}}>Avatar</Link>
                <Link to='counter' style={{'padding':'20px'}}>Counter</Link>
                <Link to='olive' style={{'padding':'20px'}}>Olive</Link>
            </Header>
            <Outlet />
            {/* <Footer>
                <div style={{}}>footer</div>
            </Footer> */}
        </div>
    );
}

