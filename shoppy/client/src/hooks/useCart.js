import React,{useContext} from 'react'; 
import { CartContext } from '../context/cartContext';
import axios from 'axios';

export function useCart(){
    const {cartList,setCartList , cartCount,setCartCount} = useContext(CartContext); 
    
    const getCartList = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/cart/items',{'id':id});
        setCartList(result.data);// useContext 에 있는 애들의 값이 업데이트되면 useContext 에 연결된 애들전부(헤더나 카트 컴포넌트 등) 값 업데이트가 된다
        setCartCount(result.data.length); // 장바구니 수량을 현재의 데이터로 넣음 / 이거 추가해 노션
    }
    const saveToCartList = async(formData) => { 
        const result = await axios.post('http://localhost:9000/cart/add',formData);
        if(result.data.result_rows){
            setCartCount(cartCount+1);  
            getCartList();
        }
        return result.data.result_rows; // return해서 detailProduct 에서 result_rows값 받을수잇게함         
    }

    const updateCartList = async(cid,type) => {
        const result = await axios.put('http://localhost:9000/cart/updateQty',{'cid':cid, 'type':type})
        result.data.result_rows && getCartList(); // 1은 true 라서 result.data.result_rows ===1 안적어도됨
        return result.data.result_rows;           
    }
    const getCount = async() =>{
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/cart/count',{'id':id});
        setCartCount(result.data.count);
        return result.data.count;
    }
    const setCount = (value) => {
        setCartCount(value);
    }

    //장바구니에서 상품 삭제 ( delete 는 문법 살짝 다름 , data 를 넘길때는 data로 {} 묶어서 넘겨야한다 )
    const deleteCartItems = async(cid) => {
        const result = await axios.delete('http://localhost:9000/cart/deleteItem',{data:{'cid': cid}});
        result.data.result_rows && getCartList();

    }


    // 이케 만든 함수를 다른곳에서도 사용할거기때문에 return {생성한함수,...};
    return {saveToCartList, updateCartList,getCartList,getCount,setCount,deleteCartItems};  // reurn 안하면 다른곳에서 절대못쓴당
}


// alert('장바구니에 추가되었습니다'); // alert 는 커스텀훅을 사용하는곳에서 실행하는게 좋다