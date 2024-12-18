import React, { useEffect, useState } from 'react';
import MenuList from './MenuList.jsx';
import './yes24.css';

export default function AppYes24() {
    const [menuList,setMenuList] = useState([]);
    useEffect(()=>{
        fetch('/practice-data/yes24.json')
            .then(data=>data.json())
            .then(jsonData=>setMenuList(jsonData.menuList))
            .catch(error=>console.log(error));
    },[])

    return (
        <div className='c'>
            <MenuList menuList={menuList}/>
        </div>
    );
}

