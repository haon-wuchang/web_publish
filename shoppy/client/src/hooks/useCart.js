import React,{useContext} from 'react'; 
import { CartContext } from '../context/cartContext';
import axios from 'axios';

export function useCart(){
    const {cartList,setCartList , cartCount,setCartCount} = useContext(CartContext); 
    // a-8. 장바구니 전체 리스트 조회 함수 생성 ( db 연동 후 cartList(=> formData 가 저장된 cartList 임) 가져오기, cartList 는 많은곳에서 쓰기때문에 if안에서 선언안한거임)
    const getCartList = async() => {
        //b.
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/cart/items',{'id':id});
        //b-1. db 연동해서 가져온 값을 넣어준다        
        setCartList(result.data);// 여기서 값 업데이트되면 useContext 에 연결된 애들전부(헤더나 카트 컴포넌트 등) 값 업데이트가 된다
    }

    // 함수 생성해서 비동기 로직과 useContext 가 관리하는 변수는 await async 를 통해 순서를 보장하도록 만들기
    //a-1.장바구니에 새로운 아이템 저장 함수 생성
    const saveToCartList = async(formData) => { //a-5. 파라미터로 받아오기 
        // a-6. 로직작성 ( 순서맞춰서 진행되도록 await 붙임)
        const result = await axios.post('http://localhost:9000/cart/add',formData);// a-7. 디비까지 갓다온 결과 => {'result_rows':result_rows}        
        if(result.data.result_rows){
            setCartCount(cartCount+1);  
            getCartList();
        }
        return result.data.result_rows; // return해서 detailProduct 에서 result_rows값 받을수잇게함
        
        
        
    }
    //a-2.장바구니 아이템 수량 업데이트 함수 생성
    const updateCartList = async(cid) => {
        //c.
        const result = await axios.put('http://localhost:9000/cart/updateQty',{'cid':cid})
        result.data.result_rows && getCartList(); // 1은 true 라서 ===1 안적어도됨
        return result.data.result_rows;           
    }
    
    // 이케 만든 함수를 다른곳에서도 사용할거기때문에 return {생성한함수,...};
    return {saveToCartList, updateCartList};  // reurn 안하면 다른곳에서 절대못쓴당
}


// alert('장바구니에 추가되었습니다'); // alert 는 커스텀훅을 사용하는곳에서 실행하는게 좋다