import React from 'react';

export default function Category({btnClass,name,spanClass,number,type,handleMom,tests}) {
    const handleClick = () => {
        handleMom(type);
        // console.log(type);
    }

    return (
        <li onClick={handleClick}>
            <button className={btnClass}>{name}
                <span className={spanClass}>{tests}</span>
            </button>
        </li>
    );
}

