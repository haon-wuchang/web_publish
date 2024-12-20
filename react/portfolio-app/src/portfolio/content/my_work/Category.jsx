import React from 'react';

export default function Category({btnClass,name,spanClass,number,type,handleMom}) {
    const handleClick = () => {
        handleMom(type);
    }

    return (
        <li onClick={handleClick}>
            <button className={btnClass}>{name}
                <span className={spanClass}>{number}</span>
            </button>
        </li>
    );
}

