import React from 'react';

export default function Category({btnClass,name,spanClass,number}) {

    return (
        <li>
            <button className={btnClass}>{name}
                <span className={spanClass}>{number}</span>
            </button>
      </li>
    );
}

