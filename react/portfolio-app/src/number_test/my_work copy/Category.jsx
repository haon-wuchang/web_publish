import React from 'react';

export default function Category({btnClass,name,spanClass,number,type,handleMom,testNum,totalNm}) {
    const handleClick = () => {
        handleMom(type);
    }
    const handleNumber = () => {
        // totalNm
    }

    return (
        <li onClick={()=>{
             handleClick();
             handleNumber();
        }}>
            <button className={btnClass}>{name}
                <span className={spanClass}>{totalNm}</span>
            </button>
        </li>
    );
}

