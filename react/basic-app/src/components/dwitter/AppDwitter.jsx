import {useEffect, useState} from "react";
import Dwitter from "./Dwitter";
import "./Dwitter.css";

export default function AppDwitter() {

const [dwittersList, setDwittersList] = useState([]);

    useEffect(() => {
        fetch('data/dwittersList.json')  //react에서 fetch는 네트워크를 이용해서 접속함 'http://localhost:3000/data/dwittersList.json'
            .then((result) => result.json())
            .then((jsonData) => setDwittersList(jsonData))  //내가만든json데이터의 배열이 dwittersList에 들어가게된다 원래는 jsonData에 내가만든json데이터 배열이 들어가자녕
            .catch((error)=>console.log(error));
            },[]);  //useEffect 안에 있는 애들은 useEffect 안에서만 살수잇다 그래서 전역에서 사용할수잇게 const나 let으로 꺼내야한다

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



// 브라우저콘솔창에서 
// Warning: Each child in a list should have a unique "key" prop.
// 이렇게 뜨는건 문제가 되지 않는다
// 왜뜨냐면 Dwitter컴포넌트가 반복이되는데 반복되는애를 구ㅡ분하는 키값이 없어서 뜬댕