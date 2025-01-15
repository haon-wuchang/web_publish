import React from 'react';

export default function Carts({cartList}) {
    return (
        <div className='content'>
            <table border='1'>
                <tr>
                    <th>pid</th>
                    <th>size</th>
                    <th>price</th>
                    <th>qty</th>
                </tr> 
            {cartList.map((item)=>
                <tr>
                    <td>{item.pid}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                </tr> 
            )}
            </table>
        </div>
    );
}

