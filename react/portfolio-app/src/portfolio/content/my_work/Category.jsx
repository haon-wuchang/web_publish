import React from 'react';

export default function Category({name,count}) {


    return (
        <li>
            <button className='category category--selected'>{name}
                <span className="category__count">{count}</span>
            </button>
        </li>
    );
}

