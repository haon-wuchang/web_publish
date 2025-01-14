import React from 'react';

export default function Avata({img}) {
    return (
        <div className='product-avatar'>
            <img src={img} alt="image" />
        </div>
    );
}

