import React, { useEffect, useState } from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';


export default function AppBestSeller() {
    const [menuList,setMenuList] = useState([]);
    useEffect(()=>{
        fetch('/data/yes24.json')
            .then(data=>data.json())
            .then(jsonData=> setMenuList(jsonData.menuList))
            .catch(error=>console.log(error));
    },[]);

    return (
        <div className='container'>
                <MenuList list={menuList}/>               
            <BestBook />
        </div>
    );
}