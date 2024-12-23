import React from 'react';

export default function Menu({href,menuName}) {
    return (
        <li>
            <a href={href} className='header__menu__item'>{menuName}</a>
        </li>
    );
}

