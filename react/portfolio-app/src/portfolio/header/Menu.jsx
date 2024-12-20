import React from 'react';

export default function Menu({href,classNm,menuName}) {
    return (
        <li>
            <a href={href} className={classNm}>{menuName}</a>
        </li>
    );
}

