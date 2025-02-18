import React, { useContext, useEffect ,useRef, useState} from "react"; 
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../hooks/useCart.js"; 

export default function Carts() {
    const {getCartList, updateCartList,deleteCartItems} = useCart(); 
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext);
    const {cartList}= useContext(CartContext);
    const hasCheckedLogin = useRef(false);

    useEffect(()=>{
        if(hasCheckedLogin.current ) return; 
            hasCheckedLogin.current = true; 

        if(isLoggedIn){
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

    const handleQtyUpdate = (cid, type) => {
        updateCartList(cid,type);       
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
                            <button onClick={()=>{handleQtyUpdate(item.cid, 'decrease')}}>
                            -
                            </button>
                            <input type="text" value={item.qty} readOnly /> 
                            <button onClick={()=>{handleQtyUpdate(item.cid, 'increase')}}>
                            +
                            </button>
                        </div>
                        <button className="cart-remove" onClick={()=>{deleteCartItems(item.cid)}} >                          
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