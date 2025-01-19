import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartList}) {
    return (      
        <div className='header-outer'>
        <div className='header'> 
            <Link to='/' className='header-left'>
                <FiShoppingBag />
                <span>shoppy logo</span>
            </Link>
            <nav className='header-right'>
                <Link to ='/product'>Products</Link>
                <Link to ='/cart'>MyCart({cartList})</Link>
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

