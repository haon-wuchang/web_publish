import { useState } from 'react';
import Counter from './Counter.jsx';
import './test.css';

export default function AppCounter() {
    const [total, setTotal] = useState(0);

    function totalNumber(num, type) {
        if(num < 5 && type === '+'){
           setTotal(total+1)
        } else if(num > 0 && type === '-'){
            setTotal(total-1)
        } 
    }
    
        return (
            <>
                <Counter totalNum={total} fun={totalNumber}/>
                <Counter totalNum={total} fun={totalNumber}/>
            </>
        );



        
    }


//Couter 두개의 총합을 출력해라
