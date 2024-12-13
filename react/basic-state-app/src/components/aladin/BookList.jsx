import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
export default function BookList() {
    const [books,setBooks] = useState([]);
    const [types,setTypes] =useState('total');
    const [categorys,setCategorys] =useState([]); 
    const [selectCategory, setSelectCategory] =useState('');

    useEffect(()=>{
        fetch('/data/aladin.json')
            .then(data=>data.json())
            .then(jsonData=>{
                setCategorys(jsonData.category); 

                if(types==='total'){
                    setBooks(jsonData.books);
                }else{
                    const filterBooks = jsonData.books.filter((item)=> item.type===types); 
                    setBooks(filterBooks) //18번줄 해설: 제이슨데이터의 북스를필터를돌린다
                    //그중에서 타입이 타입스이애들을 셋북스에 넣어서 출력되게 해야하는것이다
                }                
            })
            .catch(error=>console.log(error));
    },[types,selectCategory])  

    const handleClick = (evevt) =>{
        setTypes(evevt.target.value);
    }

    const handleChangeCategoty = (evevt) => { 
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


//셀렉트랑 버튼이랑 합쳐서 출력되게하는건 나중에 한댕
// 인풋버튼이 먼저 선택된후에 그다움에 셀렉트박스가 진행되어야한다.
