import React, { useEffect, useState } from 'react';
import Menu from "./Menu.jsx";

export default function MenuList() {
    const [menuNameList, setMenuNameList] = useState([]);
    
    useEffect(()=>{
            fetch('/json_data/project.json')
                .then(data=>data.json())
                .then(jsonData=>
                        setMenuNameList(jsonData.menuNameList))
                    .catch(error=>console.log(error));
            },[]);
            
    const [select,setSelect] = useState('Home');



    const handleClick = (menuName) => {
        setSelect(menuName);
    }
    // console.log(select);
    
    return (
        <nav>
            <ul className="header__menu">
                {menuNameList && menuNameList.map((item)=>   
                    <li>        
                        <Menu menuName={item.menuName} 
                            href={item.href}
                            click={handleClick}
                            style={item.menuName===select ? 
                                    'header__menu__item active': 
                                    'header__menu__item'}
                         />
                    </li>    
                )}
            </ul>
        </nav>
    );
}

