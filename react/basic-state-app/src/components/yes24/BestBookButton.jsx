import { useState } from "react";

export default function BestBookButton({qtyChange}) {
    const [qty, setQty] = useState(1);

    // function decrement () {
    //     if(qty < 2){
    //         alert('최소 구매 수량은 1개 입니다.')
    //     } else{
    //         setQty(qty - 1)
    //     }
    // }
    // function increment () {
    //     if(qty <10){
    //         setQty(qty +1)
    //     } else {
    //         alert('최대 구매 수량은 10개 입니다.')
    //     }   
    // }

    //decrement, increment 얘네 둘 기능이 비슷하니까 함수하나로 만들고 파라미터로 구분해서 썽
    const handleClick = (type) => {
        if(type==='-'){
            (qty>1) ? setQty(qty-1): alert('최소 구매 수량은 1개 입니다.');
        } else if(type=='+') {
            (qty<10) ? setQty(qty+1): alert('최대 구매 수량은 10개 입니다.');
        }
    }

        return (
            <ul className="btn-ul">
                <li>
                    <input type="checkbox" />
                    <button type="button" onClick={() => {handleClick('-')}}>-</button> 
                    <span>{qty}</span>
                    <button type="button" onClick={() => {handleClick('+')}}>+</button>
                </li>
                <li><button type="button" 
                    className="btn1" 
                    onClick={() => {qtyChange(qty)}}>카트에 넣기</button>
                </li>
                <li><button type="button" className="btn2">바로구매</button></li>
                <li><button type="button" className="btn3">리스트에 넣기</button></li>
            </ul>
        );
    }


