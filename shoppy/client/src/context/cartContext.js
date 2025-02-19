import {createContext, useState, useEffect} from 'react'; 

export const CartContext = createContext(); 

export const CartProvider = ({children}) => {  
    const [cartList,setCartList] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    // 1.공용으로 쓰는 cartPrice 는 cartContext 에 넣는다 (상품이 삭제되면 얘도 순서지켜서 사용되야해서 커스텀훅 사용)
    const [totalPrice, setTotalPrice] = useState(0);
   
    return ( 
        <CartContext.Provider 
        value ={{cartList,setCartList , cartCount,setCartCount, 
            totalPrice, setTotalPrice   // 1-1. 카트컨텍스트가 감싸는애들이 전부 사용할수잇게 value 에 추가해준다
        }}> 
            {children}
        </CartContext.Provider>
    );
}

