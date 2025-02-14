import React, { useState,useEffect ,useContext } from 'react'; 
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js'; 
import { useNavigate } from 'react-router-dom'; 

export default function Carts() { 
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 
    const [cartList, setCartList] = useState([]); //ㄷ. db 에서 가져온 값 저장할 변수 선언

    useEffect(()=>{  //ㄱ. 장바구니페이지에 들어오면 바로 로그인체크 진행, 
        if(isLoggedIn){ 
            //db 에있는 쇼피카트에서 상품정보 가져오기
            console.log('db'); 
            const id = localStorage.getItem('user_id'); // ㄴ-1.
            axios  // ㄱ-2. 서버로보내기 
                .post('http://localhost:9000/cart/items',{'id':id})  // ㄴ-2. id 값 넘겨주기 
                .then(res => {
                    // console.log(res.data)
                    setCartList(res.data);
                })
                .catch(error => console.log(error));
        }else{
            //로컬스토리지에 저장된 정보를 가져오고, 주문하기를 누르면 로그인으로 넘어감
            console.log('로컬스토리지');
            addCartList();
        }
    },[isLoggedIn]); // ㄱ-1.로그인정보가 바뀔떄마다 계쏙 체크가 된다

    //ㄷ-2. 로컬스토리지 데이터를 cartList 에 추가하는 함수 
    const addCartList = () => {
        const items = localStorage.getItem('cartItems'); 
        setTimeout(() => {
            setCartList([...JSON.parse(items)]); // 비동기로 감싸기        
        }, 0);
    }


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
                    {/* ㄷ-1.유저정보는 로그인했을때만 보이게 작업 */}
                    { 
                        isLoggedIn &&
                        <>
                            <th>배송지 주소</th>
                        </>
                    }
                </tr> 
                {cartList&& cartList.map((cartItems)=>
                <tr style={{textAlign:'center', fontSize:'25px'}}>
                    <td><img src={cartItems.image} alt="" style={{width:'100px'}} /></td>
                    <td>{cartItems.pid}</td>
                    <td>{cartItems.pname}</td>
                    <td>{cartItems.info}</td>
                    <td>{cartItems.size}</td>
                    <td>{cartItems.qty}</td>
                    <td>{cartItems.price}</td>
                    {/* <td><button  
                        onClick={()=>{handleOrder('each',cartItems.pid, cartItems.size)}}
                        style={{width:'200px', padding:'30px', backgroundColor:'lightcyan'}}>계속담아두기 ( 개별 주문 )
                        </button> 
                    </td>   */}
                    {/* ㄷ-1.유저정보는 로그인했을때만 보이게 작업 */}
                    {
                        isLoggedIn && 
                        <>
                            <td>{cartItems.zipcode}/{cartItems.address}</td>
                        </>
                    }
                </tr> 
                )}
            </table>
            {/* <button onClick={()=>{handleOrder('all')}}  
            style={{width:'200px', padding:'20px', backgroundColor:'yellow'}}>
                주문하기
            </button> */}
        </div>
    );
}

// 오후수업....
// 로그인안한상태로는 장바구니에 상품추가하면 로컬스토리지에잇는걸 보여주고
// 주문하기 누르면 로그인으로 넘어가고 로그인을 하고 
//  DB 에잇는 상품, 사용자 정보를 장바구니페이지에서 보여준다