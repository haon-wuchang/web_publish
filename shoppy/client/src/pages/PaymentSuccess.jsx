import React,{useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useSearchParams} from 'react-router-dom';
import { OrderContext } from '../context/OrderContext'; 
import { useOrder } from '../hooks/useOrder';

export default function PaymentSuccess() {
    const {getOrderList,saveToOrder} = useOrder();
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get('pg_token');
    const [isRun ,setIsRun] = useState(false);
    
    
    const tid = localStorage.getItem('tid'); 
    //2-3.
    useEffect(()=>{
        tid && setIsRun(true);  //5-1. tid 가 있으면 isRun 이 true 가 되고
        
        const fetchOrderList = async() => {
            const orderList = await getOrderList();   
            
            if(orderList.length > 0){
                const totalPrice = orderList.reduce((sum,item) => sum + item.price * item.qty , 0);
               if(pg_token && tid ){
                   //3-1. 여기서 axios db 연동을한다면  orderList, totalPrice 를 사용하면된다
                   //3-2. useOrder 커스텀훅을 사용해서 db 연동하는 방법도 잇다 (이걸로할거얌) 
                   saveToOrder(orderList,totalPrice, tid, 'kakaopay_qr'); //3-4.
                }
            } 
        }        
        if(isRun) {fetchOrderList();}  //5-2. isrun 이 true 일때만 fetch 를 실행한다
    },[isRun]);  // 얘가 종료되야 밑에 만든totalPrice 의  orderList 에 반영이 된다 
    // 5. !! 근데 얘가  두번씩 insert가 된다 그래서 isRun 만들어서 넣어줌 
    
    console.log(' 티아디', tid, '토큰',pg_token); 
    

    // console.log('orderList',orderList); //2-4. 잘가져오는지 확인
    // console.log('totlaprice',orderList.reduce((sum,item) => sum + item.price * item.qty , 0)); //2-4.
    
    





    // 참고용임 
    // useEffect(()=>{
    //     const approvePayment = async () => {
    //         if (pg_token && tid) {
    //             try {
    //                 const response = await axios.post('http://localhost:9000/payment/approve',{pg_token, tid});
    //                 console.log('결제승인완료',response.data);
    //             } catch (error) {
    //                 console.log('결제승인실패',error);                    
    //             }
    //         }
    //     };
    // approvePayment();
    // },[pg_token, tid]);


    return (
        <div className='content'>
            {
            pg_token &&
                <>
                <h3> ㅇㅇㅇ 님 결제가 완료되었습니다</h3>
                <div>
                    <h5>결제내역</h5>
                    <div>
                        <h5>배송 내역</h5>
                        <span> 아직 안도착 </span>
                    </div>
                    <div>
                        <h5>주문번호 : 343424324342</h5>
                        <img src="" alt="" />
                        <span>상품명 : 니트 </span>
                        <span>수량 : 1</span>
                        <span>가격 : 1000</span>
                    </div>
                </div>
                </>
            }
        </div>
    );
}

