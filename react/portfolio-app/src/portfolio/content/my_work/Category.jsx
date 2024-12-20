import React from 'react';

export default function Category({btnClass,name,number,type,handleMom,tests}) {
    const handleClick = () => {
        handleMom(type);
        // console.log(type);
    }

    return (
        <li onClick={handleClick}>
            <button className={btnClass}>{name}
                <span className="category__count">{tests}</span>
            </button>
        </li>
    );
}

