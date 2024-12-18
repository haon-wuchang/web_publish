import React from 'react';
import Menu from './Menu.jsx';

export default function MenuList({menuList}) {

    return (
        <div  className='b'>
            {menuList && menuList.map((item)=>
                <Menu menu_title={item.title}/>
            )}
        </div>
    );
}

