import React, { useContext, useEffect } from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../hooks/useCart.js"; //ㄱ.

export default function Carts() {
    const {getCartList} = useCart(); //ㄱ.
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext);
    const {cartList,setCartList}= useContext(CartContext);

    useEffect(()=>{
        if(isLoggedIn){
            //ㄴ. axios 지우고 커스텀 훅파일에서 사용할 함수가져오기
            getCartList();
        }else{
            const select = window.confirm('로그인 서비스가 필요합니다 \n 로그인 하시겠습니까');
            if(select){
                navigate('/login'); 
            }  
        }
    },[isLoggedIn]);

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
                            <button >
                            -
                            </button>
                            <input type="text" value={item.qty} readOnly />
                            <button >
                            +
                            </button>
                        </div>
                        <button
                            className="cart-remove"
                            >
                            🗑
                        </button>
                    </div>  
                )}
                    <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>       
        </div>
    );
    }

