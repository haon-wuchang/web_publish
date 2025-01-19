import React from 'react';

export default function Cart({cartList}) {
    return (
        <div>
            <ul>
                {cartList.map((data)=>
                    <>
                    <li>{data.name}</li>
                    <li>{data.img}</li>
                    <li>{data.price}</li>
                    <li>{data.size}</li>
                    <li>{data.pid}</li>
                    <li>{data.qty}</li>
                    </>
                )}
            </ul>
        </div>
    );
}

