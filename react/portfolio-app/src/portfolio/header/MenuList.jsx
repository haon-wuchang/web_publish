import React, { useEffect, useState } from 'react';
import Menu from "./Menu.jsx";

export default function MenuList() {
    const [menuNameList, setMenuNameList] = useState([]);
    useEffect(()=>{
        fetch('/json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setMenuNameList(jsonData.menuNameList))
            .catch(error=>console.log(error));
    },[]);
    
    return (
        <nav>
            <ul className="header__menu">
                {menuNameList && menuNameList.map((item)=>               
                        <Menu menuName={item.menuName} 
                            href={item.href}/>
                )}
            </ul>
        </nav>
    );
}

