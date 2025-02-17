import React, { useContext, useEffect } from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Carts() {
    const navigate = useNavigate();
//2. 마이카트페이지 클릭시 로그인 체크하고
    // 로그인이면 db 에 저장된 상품들 가져와서 보여주기
    // 로그아웃이면 로그인필요한 서비스입니다. 하고 로그인페이지로 연동

    //2-1. 로그인정보, 카트리스트 정보 가져오기
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const {cartList,setCartList}= useContext(CartContext);

    //2-2.
    useEffect(()=>{
        if(isLoggedIn){
            //2-3. db 가서 로그인 아이디의 장바구니 아이템 가져오기
            const id = localStorage.getItem('user_id');
            axios 
                .post('http://localhost:9000/cart/items',{'id':id})
                .then(res =>{
                    console.log('list',res.data);
                    setCartList(res.data);

                })
                .catch(error => console.log(error));    
        }else{
            // setCartList([]);
            const select = window.confirm('로그인 서비스가 필요합니다 \n 로그인 하시겠습니까');
            if(select){
                navigate('/login'); 
            }  
        }
    },[isLoggedIn]);

    // console.log('cartList',cartList);
    //2-4. 콘솔로 찍고 잘 가져오면 jsx 수정하기 

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
                            <input type="text" value="1" readOnly />
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

