import React from 'react';
import { RiMastercardLine } from "react-icons/ri";
import {Link} from 'react-router-dom';

export default function Header({count}) {
    return (
        <div className='header-outer'>
            <div  className='header'>
                <Link to='/'>
                    <RiMastercardLine />
                    <span>Shoppy2</span>
                </Link>
                <nav className='header-right'>
                    <Link to ='/product'>Products</Link>
                    <Link to ='/cart'>Carts({count})</Link>
                    <Link to ='/login'>Login</Link>
                    <Link to ='/signup'>Signup</Link>
                </nav>
            </div>
           
        </div>
    );
}

