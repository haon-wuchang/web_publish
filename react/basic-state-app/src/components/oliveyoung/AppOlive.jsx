import Header1 from './Header1.jsx'
import MenuList from './header/MenuList.jsx'
import Body from './Body.jsx'
import ProductList from './body/ProductList.jsx';
import './olive.css';
import { useState } from 'react';

export default function AppOlive() {
    // const [id, setId] = useState(''); //44-1. 얘를 전역변수로 만들어서 메뉴리스트에서 사용가능하게한다
    
    //1111.배열에 id 저장 -> 배열의 전체 길이를 구해서 cartCount 로 가져간다
    const [cartList, setCartList] = useState([]); // 2222.

    
    const oliveCart = (id) => {  //44. 파라미터로 id 를 넣어준다
        // setId(id);
        setCartList([...cartList, id]); //3333.    = cartList.push(id)
    } 
    //4444. setCartList('c') 이렇게 넣으면 cartList=c 가 된다 그럼 오류가발생함
    //왜냐면 cartList는 배열로 적어놨자나  근데 c는 문자열이라서 오류발생
    //그래서 setCartList=([...cartList,id]) 이런식으로 쓰던가 cartList.push(id) 이케하던가근데 후자는 뇨뇨 
    // 이거는 로그인회원가입 할떄 쓴댕 아주 잘쓴댕 ㅐㄱ중요
    console.log(`cartList->${cartList}`);  //장바구니에 누가 들어갓는지 확인 ㄱㄴ함 
    
    return (
        <>
            <Header1>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" />
                <MenuList count={cartList.length}/> 
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