import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import axios from 'axios';

//오더컨텍스트에 정의된 useState로 관리가되는 데이터를 받아서 crud 작업하는 함수를만드는게 커스텀훅의 작업이다
export function useOrder() {
    // 1-2. 데이터 받아오기 
    const {orderList,setOrderList , orderPrice, setOrderPrice} = useContext(OrderContext);
 
    // useContext 로 관리되는 객체들의 crud 함수 정의해서 사용 //
    // 전체 주문 정보 가져오기 getOrderList// 
    // 1-3. 
    const getOrderList = async() => {
        const id = localStorage.getItem('user_id');
        // 1-4. sql 에서 누구의 주문서인지 알아야하기떄문에 아이디값 가져와서 넘기기 
        //1-5. 서버만들고 mvc 작업 고 => sql 만들기         
        const result = await axios.post('http://localhost:9000/order/all',{'id':id });
        console.log('res.data',result.data); 
        
        
        setOrderList(result.data);
    }

    return {getOrderList};
}

