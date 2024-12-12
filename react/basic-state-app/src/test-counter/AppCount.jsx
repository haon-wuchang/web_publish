import React, { useState } from 'react';
import Count from './Count.jsx';

export default function AppCount() {
    const [total, setTotal] = useState(0);

    const sumTotal = (type) => {
        if(type==='+'){
            setTotal(total+1)
        } else{
            setTotal(total-1)
        } //if로 해도되고 삼항연산자로 해도댕
        // (type==='+') ? setTotal(total+1): setTotal(total-1);
    }

    return (
        <div>
            <Count tototal={sumTotal} ctotal={total}/>
            <Count tototal={sumTotal} ctotal={total}/>       
        </div>
    );
}