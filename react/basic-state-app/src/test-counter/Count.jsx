import React, { useState } from 'react';

export default function Count({tototal,ctotal}) {
    const [number, setNumber]= useState(0);
    const increase = () => {
        setNumber(number+1);
        tototal('+');
    }
    const decrease = () => {
        setNumber(number-1);
        tototal('-');
    }

    return (
        <div>
            <span>{number} /</span>
            <span>총합 : {ctotal}</span>
            <button type='button' onClick={increase}>증가</button>
            <button type='button' onClick={decrease}>감소</button>
        </div>
    );
}


// onClick(()=>{
//     여기에 여러개쓸때는 ; 이거로 구분하면댕
// })
