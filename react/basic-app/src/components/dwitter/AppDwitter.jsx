import {useEffect, useState} from "react";
import Dwitter from "./Dwitter";
import "./Dwitter.css";

export default function AppDwitter() {

// 리액트에서 네트워크 접속 진행을 할때는 useEffect() 라는 리액트Hooks을 사용한다                                      
// react hooks-> useEffect();
//  useEffect(콜백함수, defendencies)  :  무조건 맨 처음에 실행되어지는 함수이다    (작성위치는 상관업ㅁㅅ음 맨밑에 적어도됨)
// useEffect() : 자바스크립트의 비동기(async, await) 처리를 대신 해준다
//비동기처리는 useEffect로 감싼다
//useEffect() 를 사용할때는 import 로 함수를가져와야한다.  함수명은 {} 로 감싸니까 import { useEffect } from "react"; 이렇게 작성한다 ->얘는 새로고침 자동이 안되서 내가 해줘야함

const [dwittersList, setDwittersList] = useState([]);


//내가 설정한 변수들 전부 리액트가 관리를 한다 =>useState() : 변수같은애들 상태관리를 한다
// const [관리할변수이름, 변수에넣는 함수명] = useState([]);

    useEffect(() => {
        fetch('data/dwittersList.json')  //react에서 fetch는 네트워크를 이용해서 접속함 'http://localhost:3000/data/dwittersList.json'
            .then((result) => result.json())
            .then((jsonData) => setDwittersList(jsonData))  //내가만든json데이터의 배열이 dwittersList에 들어가게된다 원래는 jsonData에 내가만든json데이터 배열이 들어가자녕
            .catch((error)=>console.log(error));
            },[]);  //useEffect 안에 있는 애들은 useEffect 안에서만 살수잇다 그래서 전역에서 사용할수잇게 const나 let으로 꺼내야한다

            console.log(`드위터리스트=${dwittersList}`);

    return(
        <div className="dwitter-container"> 
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Signup</li>
            </ul>

            {dwittersList.map((item) => 
                <Dwitter img={item.img} name={item.name} id={item.id}
                date={item.date} content={item.content}></Dwitter>
            )}
        </div>
        );
}
//외부에나가서 로컬호스트를 찾아서

//Dwitter컴포넌트를 출력하는 AppDwitter파일에서 css를 설정하면 Dwitter에 임포트를 안해도 적용이된다.
// 해당 css에는 Dwitter css 내용 추가하면됨

//리턴하는 컴포넌트가 하나일때만 {} ,리턴 생략가능 / 컴포넌트여러개면 생략불가 (map, filter)!!!!!!