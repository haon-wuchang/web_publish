import {useEffect, useState} from "react";
import Dwitter from "./Dwitter";
import "./Dwitter.css";

export default function AppDwitter() {

let dwittersList = [];

    // useEffect(() => {
        fetch('data/dwittersList.json')  
            .then((result) => result.json())
            .then((jsonData) => dwittersList= jsonData)  
            .catch((error)=>console.log(error));
            // },[]);  

            console.log(`드위터리스트=${dwittersList}`);  

// useState() 를 사용하지 않앗을떄
// 결과값  드위터리스트= 
// 값을 못가져와서 빈값으로 나오게 된다.



//리액트로 짠 사이트는 새로고침을 안하느데
//수정된 부분이 어딘지 찾아야대니까 리액트가 전부 상태관리를 하는것이다 -흠.... 나즁에 더 배운뎅;



////////////////////////////////////////////////////////////////



const [dwittersList, setDwittersList] = useState([]);

    // useEffect(() => {
        fetch('data/dwittersList.json')  
            .then((result) => result.json())
            .then((jsonData) => setDwittersList(jsonData))  
            .catch((error)=>console.log(error));
            // },[]);  

            console.log(`드위터리스트=${dwittersList}`);


//useEffect() 를 사용하지않고 걍 fetch .then .catch 만 하면 무한루프에 빠지게된다