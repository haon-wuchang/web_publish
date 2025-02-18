import React, { useContext, useEffect ,useRef, useState} from "react"; //ㄷ.
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../hooks/useCart.js"; //ㄱ.

export default function Carts() {
    const {getCartList, updateCartList} = useCart(); //ㄱ.
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext);
    const {cartList}= useContext(CartContext);
    const hasCheckedLogin = useRef(false);
    //ㄷ-1. 로그인체크가 두번떠서 ref 사용해서 한번만 뜨게 작업

    useEffect(()=>{
        if(hasCheckedLogin.current ) return; //ㄷ-2. return 은 밑에꺼 실행안하고 걍 빠져나오는거임 true :: 로그인 상태임 -> 바로 return ( 로그인 얼러트 안띄움)
            hasCheckedLogin.current = true; //ㄷ-2. 

        if(isLoggedIn){
            //ㄴ. axios 지우고 커스텀 훅파일에서 사용할 함수가져오기
            getCartList();
        }else{            
            const select = window.confirm('로그인 서비스가 필요합니다 \n 로그인 하시겠습니까');
            if(select){
                navigate('/login'); 
            } else {
                navigate('/');
            }
        }
    },[isLoggedIn]);

    //장바구니 수량 업데이트 작업 11-1.    콜백에서 받아온 파라미터를 받아온다
    const handleQtyUpdate = (cid, type) => {
        //11-2. 커스텀훅에서 수량업데이트하는 함수 가져오기 
        const result = updateCartList(cid,type);
        console.log(type,'수량업데이트',result); // 11-7.
        
        
    }
    
    return (
        <div className="cart-container">
            <h2 className="cart-header"> 장바구니</h2>
                {cartList && cartList.map((item)=>
                    <div className="cart-item" >
                        <img src={item.image} alt="" />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{item.pname}</p>
                            <p className="cart-item-title">{item.size}</p> 
                            <p className="cart-item-price">{item.price}원</p>                           
                        </div> 
                        <div className="cart-quantity">
            {/* 11.cid 기준으로 업데이트 하니까 콜백형식으로 cid 받아온다  , 뒤에꺼는 파라미터 구분자이다*/}
                            <button onClick={()=>{handleQtyUpdate(item.cid, 'decrease')}}>
                            -
                            </button>
                            <input type="text" value={item.qty} readOnly /> 
                            <button onClick={()=>{handleQtyUpdate(item.cid, 'increase')}}>
                            +
                            </button>
                        </div>
                        <button
                            className="cart-remove"
                            >
                            <FaRegTrashAlt />
                        </button>
                    </div>  
                )}
                    <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>       
        </div>
    );
    }

//readOnly 는 input 창에 글 쓸수없음 