import React from 'react';

export default function ProductAvatar({img}) {
    return (
        <div className='product-avatar'>
           <img src={img} alt="" /> 
        </div>
    );
}

