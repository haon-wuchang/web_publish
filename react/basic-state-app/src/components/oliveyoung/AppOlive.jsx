import Header1 from './Header1.jsx'
import MenuList from './header/MenuList.jsx'
import Body from './Body.jsx'
import ProductList from './body/ProductList.jsx';
import './olive.css';
import { useState } from 'react';

export default function AppOlive() {
    const [id, setId] = useState(''); //44-1. 얘를 전역변수로 만들어서 메뉴리스트에서 사용가능하게한다

    const oliveCart = (id) => {  //44. 파라미터로 id 를 넣어준다
        setId(id);
    }
    return (
        <>
            <Header1>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" />
                <MenuList id={id}/>
            </Header1>
            <Body>
                <ProductList cart={oliveCart}/>
            </Body>
        </>
    );
}
//22. oliveCart 라는 함수 선언 ( 얘가 프로덕트리스트 컴포넌트의 함수한테 값을 넘겨준다)
//55. useState 를 추가한다 : id 를 저장하는 변수를 하나 만든다
// id 는 문자라서 useState 안에 '' 이커써줌