import React from 'react';

export default function Menu({href,menuName}) {

    return (
        <li>
            <a href={href} className='header__menu__item'>{menuName}</a>
        </li>
    );
}

// 이벤트, 발생할떄마다누가클릭되는지 관리useState , 해당 css 값을 넘겨준다