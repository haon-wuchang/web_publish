import { useState } from "react";
import BestBookButton from "./BestBookButton.jsx";

export default function BestBook() {
    const [totalQty, setTotalQty] = useState(0);

    const list = [
        {"img" : "https://image.yes24.com/goods/13137546/L"},
        {"img" : "https://image.yes24.com/goods/108422348/L"},
        {"img" : "https://image.yes24.com/goods/103495056/L"}
    ];

    const handleChangeQty = (qty) => {       
        setTotalQty(totalQty + qty);  // qty는 베스트북버튼에 잇는 qty 값임
    }
    return ( 
        <>
        <div>전체 카트 수량 : {totalQty}</div> 
            {list.map((item)=>
                <div className="container">
                    <img src={item.img} />
                    <BestBookButton qtyChange={handleChangeQty}/>
                </div>           
            )}
        </>
    );
}

