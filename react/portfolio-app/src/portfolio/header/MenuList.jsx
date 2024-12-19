import React from 'react';
import Menu from "./Menu.jsx";

export default function MenuList() {
    const menuNameList = [
        {"name":"Home", "href":"#home","classNm":"header__menu__item active"},
        {"name":"About","classNm":"header__menu__item", "href":"#about"},
        {"name":"Skills","classNm":"header__menu__item", "href":"#skill"},
        {"name":"My work","classNm":"header__menu__item", "href":"#work"},
        {"name":"Testimonial","classNm":"header__menu__item" ,"href":"#testimonial"},
        {"name":"Contact", "classNm":"header__menu__item", "href":"#contact"}
    ]

    return (
        <nav>
            <ul className="header__menu">
                {menuNameList && menuNameList.map((item)=>
                    <li>
                        <Menu name={item.name} classNm={item.classNm} href={item.href}/>
                    </li>
                )}
            </ul>
    </nav>
    );
}

