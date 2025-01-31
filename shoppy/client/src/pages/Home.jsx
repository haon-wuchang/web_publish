import React from 'react';
import ProductList from '../components/ProductList.jsx';

export default function Home() {
    return (
        <div className='content'>
            <div className='banner'>
                <h3>Shop with Us</h3>
                <p>Best Products, High Quality</p>
            </div>
            <a href='http://localhost:9000/hello'> 서버테스트
                <ProductList />
            </a>
        </div>
    );
}

