import React from 'react';
import Menu from './Menu.jsx';

export default function MenuList({hand2,menuList}) {
    const handleMom = (category) => {
        hand2(category);        
    }

   
    return (
        <ul>
            {menuList && menuList.map((item)=>
                <Menu name={item.name}
                    category={item.category}
                    hand1={handleMom}/>            
            )}
        </ul>
    );
}

