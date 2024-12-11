import Header1 from './Header1.jsx'
import MenuList from './header/MenuList.jsx'
import Body from './Body.jsx'
import ProductList from './body/ProductList.jsx';
import './olive.css';
import { useState } from 'react';

export default function AppOlive() {
  
    const [cartList, setCartList] = useState([]); 

    
    const oliveCart = (id) => {  
        setCartList([...cartList, id]);
    } 

    console.log(`cartList->${cartList}`); 
    
    return (
        <>
            <Header1>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" />
                <MenuList countCart={cartList.length}/> 
            </Header1>
            <Body>
                <ProductList cart={oliveCart}/>
            </Body>
        </>
    );
}

