import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
export default function BookList() {
    const [books,setBooks] = useState([]);
    const [types,setTypes] =useState('total');

    useEffect(()=>{
        fetch('/data/aladin.json')
            .then(data=>data.json())
            .then(jsonData=>{
                if(types==='total'){
                    setBooks(jsonData);
                }else{
                    //setBooks에 국내도서만 넣고싶다하면 여기서 필터링을 해야함
                    const filterBooks = jsonData.filter((item)=> item.type===types); // 조건이 하나이고 한줄일떄는 이렇게 {}생략이가능하다
                    setBooks(filterBooks) 
                }
            })
            .catch(error=>console.log(error));
    },[types])  

    const handleClick = (evevt) =>{
        setTypes(evevt.target.value);
    }
    return (
        <>
        <div>
            <input type="radio" name='check' value='total' onClick={handleClick}/>전체 
            <input type="radio" name='check' value='domestic' onClick={handleClick}/>국내 
            <input type="radio" name='check' value='overseas' onClick={handleClick}/>국외
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
//인풋부분:  외부에서 연동하는데이터가잇으면 벨류에 그값을 넣어줘야한다 내맘대로 지정하는게아니고


