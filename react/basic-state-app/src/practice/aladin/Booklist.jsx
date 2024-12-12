import { useEffect, useState } from 'react';
import Book from './Book.jsx'

export default function BookList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('total');

    const [selectList, setSelectList] = useState([]);
    const [selectChoose,setSelectChoose] = useState('');

    useEffect(()=>{
        fetch('/practice-data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                setSelectList(jsonData.selectList);
                    if(inputValue==='total'){
                        setList(jsonData.bookList);
                    } else{
                        const push = jsonData.bookList.filter((item)=>item.type===inputValue);
                        setList(push)
                    }                                        
                })
            .catch(error=>console.log(error));
            },[inputValue,selectChoose])            
   
    const inputCheck = (event) => {
        setInputValue(event.target.value);
    }
    const changeSelect = (event) => {
        // console.log(event.target.value);
        setSelectChoose(event.target.value);
        
    }

    return(
        <div className='div'>
            <div>
                <input type="radio" name="check" onClick={inputCheck} value="total"/>전체
                <input type="radio" name="check" onClick={inputCheck} value="inside"/>국내
                <input type="radio" name="check" onClick={inputCheck} value="outside"/>국외
                <select onChange={changeSelect}>
                    <option value="선택">선택</option>
                    {selectList && selectList.map((item)=>
                        <option value={item.choose}>{item.choose}</option>
                    )}
                </select>
            </div>
            <ul>
                {list && list.map((item)=>
                    <li>
                        <Book img={item.img} title={item.title}/>
                    </li>
                
                )}
            </ul>
        </div>
    );
}