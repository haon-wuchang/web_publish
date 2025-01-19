import React from 'react';

export default function Item({img}) {
    return (
        <div className='product-avatar'>
            <img src={img} alt="image" />
        </div>
    );
}

