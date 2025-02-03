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
                    <Link to = '/employees'>
                        <button type='button'>employees</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

