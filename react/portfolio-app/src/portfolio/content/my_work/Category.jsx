import React from 'react';

export default function Category({btnClass,name,spanClass,number}) {
    const

    return (
        <li onClick={handleClick}>
            <button className={btnClass}>{name}
                <span className={spanClass}>{number}</span>
            </button>
        </li>
    );
}

