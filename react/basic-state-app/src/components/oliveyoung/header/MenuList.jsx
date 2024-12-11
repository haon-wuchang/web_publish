import { useState } from 'react';
import Menu from './Menu.jsx'

export default function MenuList({count}) { //3333.  
    const [cartCount,setCartCount] = useState(0);  //111.

    const list = [
        {"text" : "회원가입"},
        {"text" : "로그인"},
        {"text" : "장바구니"},
        {"text" : "주문배송"},
        {"text" : "고객센터"},
        {"text" : "올영매장"},
        {"text" : "Global"}
    ];

    return (
        <div className='header-container'>
            <ul className='header-menu'>
                {list && list.map(item =>     //item 하나만 받으니까 괄호 없어도댕
                    <li>  
                        <Menu text={item.text}  
                            count={count} /> 
                        {/* {(item.text ==='장바구니')?<span>{cartCount}</span>
                        :''} */}
                    </li>
                )}
            </ul>
        </div>
    );
}
// 222. <span> text 가 장바구니일때만 찍히게해야함
//333. {(item.text ==='장바구니')?<span>{cartCount}</span>:''} 삼항연산자로 작성=> 이거는 메뉴안에 수량이 들어가는게 아니라 메뉴리스트의 장바구니 옆에 들어감
// 444. <Menu text={item.text}   count={cartCount} />  => 이거는 메뉴안에 수량이 들어가게됨


