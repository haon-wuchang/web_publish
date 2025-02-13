import React, { useState,useEffect ,useContext } from 'react'; //a-1. AuthContext얘를 전역에서 사용하기위해 useContext 추가
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js'; //a-1.
import { useNavigate } from 'react-router-dom'; // a-5.

export default function Carts() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);  // a-2.isLoggedIn로  로그인됐는지 확인
    const navigate = useNavigate();  // a-5.


   //ㄷ. 장바구니아이템 저장 => 배열로
    const [cartList,setCartList] = useState(()=>{  
        try {
          const initCartList = localStorage.getItem('cartItems');
          return initCartList ? JSON.parse(initCartList) : []; 
        } catch (error) {
          console.log('로컬스토리지 데이터 작업 중 에러발생');
          console.log(error);      
        }    
    });  
    
    const pids = cartList&&cartList.map((item)=>item.pid); 
    
    //7-1.
    useEffect(()=>{
        if(pids.length > 0){           
            axios
            .post('http://localhost:9000/product/cartItems',{'pids':pids}) 
            .then(
                res =>{ 
                console.log('res=',res.data);   //6. 레파지토리-컨트롤러에서 보낸값 받음         
            //6-2. cartItems 에 res.data 의 정보 추가 
            const updateCartItems = cartList.map((item)=>{
                const filterItem = res.data.find((ritem)=>ritem.pid === item.pid)
                return filterItem ? 
                    {...item, 
                        'pname':filterItem.pname, 
                        'price':filterItem.price,
                        'image':filterItem.image,
                        'description':filterItem.description
                    }
                    :item
            })
                  //6-3.updateCartItems 를 setCartItems 에 넣어주기
                  setCartList(updateCartItems);           
                                    })
            .catch(error => console.log(error));                                    
           }
        },[]);
        //7. 근데 이케하면 콘솔이 무한으로 찍히게 된다 얘를 useEffect 를 사용해서 react 가 관리하게 만들어준다
        console.log('cartList',cartList);
        
        // ㅁ-1. 함수선언   
        const handleOrder = () => {
            // 로그인 여부확인 => ㅂ.로그인 토큰에 아이디 추가하기
            // console.log('isLoggedIn==',isLoggedIn); // a-3.  버튼클릭했을때 로그인인지 아닌지 ture ,false 로 나옴
            if(isLoggedIn){  // a-4. if문 작성
                // b. 로그인 상태이면 DB 연동 후 저장 
                const id = localStorage.getItem('user_id'); //b-2.
                const formData = {'id':id, 'cartList':cartList} //b-3.
                 axios
                    .post('http://localhost:9000/cart/add',formData)  //b-4. 서버로 formData 넘기기 
                    //b-1. post 로 넘길떄 {}이렇게 넘겨야하는데 이안에  {'id':'test1', 'cartList':[~~~~]} 이렇게 들어가야한다
                    .then(res => {
                        console.log('res=',res.data) ;
                        // res.data.result_rows === 1 && alert('장바구니에 추가되었습니다')   // d. db 에서 넘어온값 받음                  
                    })
                    .catch(error => console.log(error));
            }else { 
                // a-5.로그아웃 상태이면 로그인 페이지로 넘기고 db 연동 후 저장
                const select = window.confirm('로그인 먼저 해');
                select && navigate('/login'); 
            }

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
                </tr> 
                {/* 7-2. */}
                {cartList&& cartList.map((cartItems)=>
                <tr style={{textAlign:'center', fontSize:'25px'}}>
                    <td><img src={cartItems.image} alt="" style={{width:'100px'}} /></td>
                    <td>{cartItems.pid}</td>
                    <td>{cartItems.pname}</td>
                    <td>{cartItems.description}</td>
                    <td>{cartItems.size}</td>
                    <td>{cartItems.qty}</td>
                    <td>{cartItems.price}</td>
                </tr> 
                )}
            </table>
            {/* ㅁ. 주문하기 버튼생성 - 누르면 로그인하라고 뜨고 로그인정보와 카트정보를 같이 넘기면된다 */}
            <button onClick={handleOrder}
            style={{width:'200px', padding:'20px', backgroundColor:'yellow'}}>
                주문하기
            </button>
        </div>
    );
}

// ㄱ.로컬스토리지에 잇는데이터는 새로고침해도 사라지면 절대로 안되는데 만약에 사라지는경우에 아래 내용 확인해보기
//<삭제되는 경우>
// 1.브라우저 업데이트 충돌발생한 경우 -> 얜 거의없음
// 2. useState 로 관리되는 데이터가 저장이안되거나, 로직이 잘못된경우 
// ( 쿠키는 사라질수도잇댕 )
