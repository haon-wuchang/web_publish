import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'> 
                <Link to='/'>shoppy logo</Link>
                <nav>
                    <Link to ='/all'>Products</Link>
                    <Link to ='/cart'>MyCart</Link>
                    <Link to ='/login'>Login</Link>
                    <Link to = '/signup'>Signup</Link>
                </nav>
            </div>
        </div>
    );
}

// <a> 대신 <Link> 태그 사용하기 
// <Link to = '라우터에서 적은 경로'>shoppy logo</Link> 누르면 index 페이지 나오게 해댜댕
