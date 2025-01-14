import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav>
                <Link to='/'>logo</Link>
                <Link to='/all'>products</Link>
                <Link to='/cart'>cart</Link>
                <Link to='/login'>login</Link>
                <Link to='/signup'>signup</Link>
            </nav>
        </div>
    );
}

