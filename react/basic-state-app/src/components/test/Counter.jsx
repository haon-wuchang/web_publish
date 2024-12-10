import React, { useState } from 'react';

export default function Counter({totalNum, fun}) {
    const [number, setNumber] = useState(0);
    const increase = () => {
       if(number<5){
        setNumber(number+1)
       } else {
        alert('5초과 금지')
       }
       fun(number,'+');
    }
    const decrease = () => {
        if(number<1){
            alert('마이너스 금지')
        } else {
            setNumber(number-1)
        }
        fun(number, '-');
    }

    return (
        <div className='container'>
            <div>
                <span className='num'>{number} / </span>
                <span>{totalNum}</span>
            </div>
            <button type="button" onClick={increase}>증가</button>
            <button type="button" onClick={decrease}>감소</button>
        </div>
    );
}

