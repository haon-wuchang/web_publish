import { useEffect, useState } from 'react';
import Book from '../aladin/Book.jsx'

export default function MenuList() {
    const [list, setList] = useState([]);
    const [inputData, setInputData] = useState('total');

    const [selectCategory, setSelectCategory] = useState([]);
    const [selectData, setSelectData] = useState('');

    useEffect(()=>{
        fetch('/data/aladin.json')
            .then(data=>data.json())
            .then(jsonData=>{
                setSelectCategory(jsonData.category);
                if(inputData==='total'){
                    setList(jsonData.books)}
                else {                            // type===inputData 이부분은 타입의 값,저장위치? 랑 인풋데이터의 값.저장위치? 가 일치하는지 비교하는거야 if 아니다
                    const a= jsonData.books.filter((item)=>item.type===inputData );
                    setList(a); //💦 여기부분이 자꾸 막힘용 연습많이행 💦
                }
            })
            .catch(error=>console.log(error));
    },[inputData,selectData])
    //useEffect 결과 확인하려면 useEffect 가 끝나고난뒤에 콘솔찍으면댕
//💥디펜던시에 잇는 인풋데이터가 바뀌면(=인풋버튼을 클릭하면) useEffect 의 fetch를 업데이트해서 다시실행하게된다

//인풋의 네임이나 벨류는 이벤트가 해당값을 가져온다💥
//인풋클릭해서 넘어오는 밸류값을 관리하는 걸 useState로 하나 만든다💥=>const [inputData, setInputData] = useState('total');
    const inputClick = (event) =>{
        setInputData(event.target.value);
    }
    const selectClick = (event) => {
        setSelectData(event.target.value);
        // console.log(event.target.value);
    }
    return (
        <div>
            <div>
                <input type="radio" name='check'onClick={inputClick} value='total'/>전체
                <input type="radio" name='check'onClick={inputClick} value='domestic'/>국내
                <input type="radio" name='check'onClick={inputClick} value='overseas'/>국외
                <select onChange={selectClick}>
                    <option value="전체">전체</option>
                    {selectCategory && selectCategory.map((item)=>
                        <option value={item.name}>{item.name}</option>
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

