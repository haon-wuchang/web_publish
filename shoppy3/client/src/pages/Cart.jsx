import React from 'react';

export default function Cart({cartList}) {
    return (
        <div>
            {cartList.map((i)=>
                <>
                <li>{i.pid}</li>
                <li>{i.name}</li>
                <li>{i.price}</li>
                <li>{i.qty}</li>
                <li>{i.size}</li>   
                </>     
            )}
        </div>
    );
}

