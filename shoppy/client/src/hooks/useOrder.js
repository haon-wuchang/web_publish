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
    // 3-3. 
    const saveToOrder = async(orderList,totalPrice,tid, type) => {
        console.log('odddddddddd',orderList);
        console.log('oddddddddddddrderPrice',totalPrice);
        
        const id = localStorage.getItem('user_id');
        const formData = {
            'tid':tid,
            'type' : type,
            'id':id,
            'totalPrice':totalPrice,
            'orderList':orderList
        };
        const result = await axios.post('http://localhost:9000/order/add',formData);
            console.log('order add result',result.data); //4-1. db연동결과 잘 나오는지 확인   

    
    }
    




    
    return {getOrderList,saveToOrder}; 
}

//오더컨텍스트에 정의된 useState로 관리가되는 데이터를 받아서 crud 작업하는 함수를만드는게 커스텀훅의 작업이다
