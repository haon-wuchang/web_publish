import React from 'react';

export default function Category({btnClass,name,spanClass,number}) {

    return (
        <li>
            <button class={btnClass}>{name}
                <span class={spanClass}>{number}</span>
            </button>
      </li>
    );
}

