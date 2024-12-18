import React, { useEffect, useState } from 'react';
import MenuList from './MenuList.jsx';
import BestBook from './BestBook.jsx';
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
            <BestBook />
        </div>
    );
}


//베스트북,버튼,컨텐츠,이미지 만들고나서 
//json 데이터는 앱yes24에서 불러오기 하고
//메뉴에 온클릭 이벤트 줘야함