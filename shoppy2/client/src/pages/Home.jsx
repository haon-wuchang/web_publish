import React, { use, useEffect, useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import Slider from '../components/Slider.jsx';

export default function Home() {    
    return (
        <div className='content'>
            <Slider />



            <div className='banner'>
                <h3>Shop with Us</h3>
                <p>Best Products, High Quality</p>
            </div>
            <ProductList />
        </div>
    );
}

