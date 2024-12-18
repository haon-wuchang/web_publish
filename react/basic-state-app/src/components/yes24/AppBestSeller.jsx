import React, { useEffect, useState } from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';


export default function AppBestSeller() {
    const [menuList,setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    
    const [category, setCategoty] =useState('total'); 

    useEffect(()=>{
        fetch('/data/yes24.json')
            .then(data=>data.json())
            .then(jsonData=> {
                setMenuList(jsonData.menuList);
                if(category==='total'){
                    setBookList(jsonData.bookList);
                }else{  //category 값에 따라 필터링 처리 후 setBookList 에 추가하기
                    const filterArray = jsonData.bookList.filter((book)=>
                        book.category === category ); //=> 결과값 [{book},{book}...]
                    setBookList(filterArray);
                }
            })
            .catch(error=>console.log(error));
    },[category]);  

    //AppBestSeller <- MenuList <- Menu  
    const handleMenuClickReq2 = (category) => { 
        // console.log(`AppBestSeller컴포넌트 ==> ${category}`); //로그로 값 잘 넘어오는지 확인해야함
        setCategoty(category); 
    }  
    

    return (
        <div className='container'>
                <MenuList list={menuList} clickApp ={handleMenuClickReq2}/>              
            <BestBook list={bookList}/>
        </div>
    );
}




