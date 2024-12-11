import { useState } from 'react';
import Menu from './Menu.jsx'

export default function MenuList({count}) { 
    const [cartCount,setCartCount] = useState(0);  

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


