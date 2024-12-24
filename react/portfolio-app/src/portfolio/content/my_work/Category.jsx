import React from 'react';

export default function Category({name,count,style,click}) {

    return (
        <li>
            <button 
            className={style} 
            onMouseOver={()=>{click(name)}}>
            {name}
                <span className="category__count">{count}</span>
            </button>
        </li>
    );
}

