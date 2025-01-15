import React from 'react';

export default function Cart({choice}) {
    return (
        <div className='cart'>            
                {choice.map((item)=>
                <div className='cart-item'>
                    <img src={item.img} />   
                    <span>제품번호 : {item.id} </span>
                    <span>상품명 : {item.name} </span>
                    <span>사이즈 : {item.size} </span>
                    <span>수량 : {item.qty} </span>
                </div>             
                )}            
        </div>
    );
}

