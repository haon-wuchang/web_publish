import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartCount}) {
    return (
        <div className='header-outer'>
            <div className='header'> 
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>shoppy logo</span>
                </Link>
                <nav className='header-right'>
                    <Link to ='/all'>Products</Link>
                    <Link to ='/cart'>MyCart({cartCount})</Link>
                    <Link to ='/login'>
                        <button type='button'>Login</button>
                    </Link>
                    <Link to = '/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

// <a> 대신 <Link> 태그 사용하기 
// <Link to = '라우터에서 적은 경로'>shoppy logo</Link> 누르면 index 페이지 나오게 해댜댕
// Link 태그 안에잇는 버튼은 따로 클릭이벤트 안줘도댕

