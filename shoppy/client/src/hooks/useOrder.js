import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import axios from 'axios';
import { useCart } from './useCart.js';  

export function useOrder() {
    const {orderList,setOrderList , orderPrice, setOrderPrice,member,setMember} = useContext(OrderContext);
    const {calculateTotalPrice} = useCart(); 
    // useContext 로 관리되는 객체들의 crud 함수 정의해서 사용 //
    // 전체 주문 정보 가져오기 getOrderList// 
    const getOrderList = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/order/all',{'id':id });
        // console.log('res.data',result.data);          
        setOrderList(result.data);   
        setMember(result.data[0]); 
        calculateTotalPrice(result.data); 
        
    }
    
    return {getOrderList}; 
}

//오더컨텍스트에 정의된 useState로 관리가되는 데이터를 받아서 crud 작업하는 함수를만드는게 커스텀훅의 작업이다
