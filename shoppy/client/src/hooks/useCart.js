import React,{useContext} from 'react'; 
import { CartContext } from '../context/cartContext';

export function useCart(){
    const {cartList,setCartList , cartCount,setCartCount} = useContext(CartContext); 

    // 함수 생성해서 비동기 로직과 useContext 가 관리하는 변수는 await async 를 통해 순서를 보장하도록 만들기


    // 이케 만든 함수를 다른곳에서도 사용할거기때문에 return {생성한함수,...};
    return {};
} 