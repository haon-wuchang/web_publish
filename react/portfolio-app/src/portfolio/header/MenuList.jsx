import React from 'react';
import Menu from "./Menu.jsx";

export default function MenuList() {
    const menuNameList = [
        {"menuName":"Home", "href":"#home","classNm":"header__menu__item active"},
        {"menuName":"About","classNm":"header__menu__item", "href":"#about"},
        {"menuName":"Skills","classNm":"header__menu__item", "href":"#skill"},
        {"menuName":"My work","classNm":"header__menu__item", "href":"#work"},
        {"menuName":"Testimonial","classNm":"header__menu__item" ,"href":"#testimonial"},
        {"menuName":"Contact", "classNm":"header__menu__item", "href":"#contact"}
    ]

    return (
        <nav>
            <ul className="header__menu">
                {menuNameList && menuNameList.map((item)=>               
                        <Menu menuName={item.menuName} classNm={item.classNm} 
                            href={item.href}/>
                )}
            </ul>
        </nav>
    );
}

