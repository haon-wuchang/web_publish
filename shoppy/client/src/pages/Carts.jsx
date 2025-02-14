import React, { useState,useEffect ,useContext } from 'react'; 
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js'; 
import { useNavigate } from 'react-router-dom'; 

export default function Carts({refreshStorage}) { // 6. app 이 보낸거 받아오기 
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 
    const navigate = useNavigate();  



    return (
        <div className='content'>
            <table border='1' style={{width:'1400px'}}>
                <tr>
                    <th>image</th>
                    <th>pid</th>
                    <th>pname</th>
                    <th>description</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                    {/* <th></th> */}
                </tr> 
                {cartList&& cartList.map((cartItems)=>
                <tr style={{textAlign:'center', fontSize:'25px'}}>
                    <td><img src={cartItems.image} alt="" style={{width:'100px'}} /></td>
                    <td>{cartItems.pid}</td>
                    <td>{cartItems.pname}</td>
                    <td>{cartItems.description}</td>
                    <td>{cartItems.size}</td>
                    <td>{cartItems.qty}</td>
                    <td>{cartItems.price}</td>
                    {/* <td><button  
                        onClick={()=>{handleOrder('each',cartItems.pid, cartItems.size)}}
                        style={{width:'200px', padding:'30px', backgroundColor:'lightcyan'}}>계속담아두기 ( 개별 주문 )
                        </button> 
                    </td>   */}
                </tr> 
                )}
            </table>
            <button onClick={()=>{handleOrder('all')}}  
            style={{width:'200px', padding:'20px', backgroundColor:'yellow'}}>
                주문하기
            </button>
        </div>
    );
}

// 오후수업....
// 로그인안한상태로는 장바구니에 상품추가하면 로컬스토리지에잇는걸 보여주고
// 주문하기 누르면 로그인으로 넘어가고 로그인을 하고 
//  DB 에잇는 상품, 사용자 정보를 장바구니페이지에서 보여준다