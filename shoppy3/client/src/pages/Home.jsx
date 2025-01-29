import React from 'react';
import ItemList from '../components/ItemList.jsx';

export default function Home() {
    return (
        <div className='content'>
            <div className='banner'>
                <h3>Shop with US</h3>
                <p>Best Products, High Quality</p>
            </div>
            <ItemList />
        </div>
    );
}

