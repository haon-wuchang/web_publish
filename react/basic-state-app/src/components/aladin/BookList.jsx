import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
export default function BookList() {
    const [books,setBooks] = useState([]);
    const [types,setTypes] =useState('total');
    const [categorys,setCategorys] =useState([]); //추가
    const [selectCategory, setSelectCategory] =useState(''); //추가

    useEffect(()=>{
        fetch('/data/aladin.json')
            .then(data=>data.json())
            .then(jsonData=>{
                setCategorys(jsonData.category); //추가

                if(types==='total'){
                    setBooks(jsonData.books);
                }else{
                    const filterBooks = jsonData.books.filter((item)=> item.type===types); 
                    setBooks(filterBooks) 
                }                
            })
            .catch(error=>console.log(error));
    },[types,selectCategory])   //추가  디펜던시에는 여러개가 들어갈 수 있따.

    const handleClick = (evevt) =>{
        setTypes(evevt.target.value);
    }

    const handleChangeCategoty = (evevt) => { //추가
        setSelectCategory(evevt.target.value);
    }
    return (
        <>
        <div>
            <input type="radio" name='check' value='total' onClick={handleClick}/>전체 
            <input type="radio" name='check' value='domestic' onClick={handleClick}/>국내 
            <input type="radio" name='check' value='overseas' onClick={handleClick}/>국외
            <select onChange={handleChangeCategoty}>  
                <option value='선택'>선택</option>
                {categorys && categorys.map((item)=>
                    <option value={item.name}>{item.name}</option>
                )}
            </select>
        </div>
            <ul>
                {books && books.map((book)=>
                    <li>
                        <Book img={book.img} title={book.title}/>
                    </li>
                )}
            </ul>
        </>
    );
}

// <select> 추가
