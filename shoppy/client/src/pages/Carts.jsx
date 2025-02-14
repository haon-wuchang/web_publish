import React, { useState,useEffect ,useContext } from 'react'; 
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js'; 
import { useNavigate } from 'react-router-dom'; 

export default function Carts({refreshStorage}) { // 6. app 이 보낸거 받아오기 
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 
    const navigate = useNavigate();  


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
    
    useEffect(()=>{
        if(pids.length > 0){           
            axios
            .post('http://localhost:9000/product/cartItems',{'pids':pids}) 
            .then(
                res =>{ 
                // console.log('res=',res.data);          
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
                  setCartList(updateCartItems);           
                                    })
            .catch(error => console.log(error));                                    
           }
        },[cartList]); 
        //                  
        // console.log('cartList',cartList);

        
        const handleOrder = (type,pid, size) => {  
            // console.log('isLoggedIn==',isLoggedIn); 
            // console.log(type, pid, size);            
            const id = localStorage.getItem('user_id'); 
            let formData = [];
            if(type === 'all'){  
                formData = {id:id, cartList:cartList} ;
            } else{
                const filterItem = cartList.filter((item)=> item.pid === pid && item.size === size );
                formData = {id:id, cartList:filterItem};
            }
            // console.log(formData);             

            if(isLoggedIn){  
                 axios
                    .post('http://localhost:9000/cart/add',formData) 
                    .then(res => {
                        // console.log('res=',res.data) ;
                        if(res.data.result_rows){
                            alert('장바구니에 추가되었습니다'); 
                            if(type === 'all'){                                
                                clearStorageAll();
                                //5. App.js 의 카트리스트, 카트카운트 초기화작업 =>앱으로 이동
                                refreshStorage([],0);  // 6-1.  //8-6. 얘 파라미터 수정해주기 all 일때는 무조건 삭제니까 이케 넣어준거    잘되는지보면 끗
                            } else {  // 7. each 일떄 개별삭제 작업 ㄱ ( pid, size 넘겨주기)
                                const updateCart = clearStorageEach(pid,size);  // 8-3리턴한 업데이트값을 넣을변수선언, 이변수를refreshStorage 에 넘김
                                refreshStorage(updateCart, updateCart.length); //8. 업데이트카트를 보내줘야하는데 얘는 clearStorageEach 얘 안에서만 사는중임
                                
                            }
                        }
                    })
                    .catch(error => console.log(error));
            }else { 
                const select = window.confirm('로그인 먼저 해');
                select && navigate('/login'); 
            }
        }

        const clearStorageAll = () => {
            // console.log('스토리지삭제 시작');
            localStorage.removeItem('cartItems');
            setTimeout(() => {
                setCartList([]);                
            }, 0);
            // console.log('스토리지삭제완');
        };
        //7-1.로컬스로리지 개별 아이템 삭제 = 기존꺼삭제하고 카트리스트애들중에 삭제애빼고 전부나오게
        const clearStorageEach = (pid,size) => {
            // 7-2.선택한애를 제외한 상품들을 새배열에 넣는다
            const updateCart = cartList.filter((item)=> !(item.pid === pid && item.size === size) );
            // console.log('updateCart',updateCart); 
            localStorage.removeItem('cartItems');  // 7-3.기존꺼 전부 지우고  
            localStorage.setItem('cartItems',updateCart) // 7-4.업데이트카트 내용만 넣어주기
            setTimeout(() => {
                setCartList(updateCart); //7-5. 비동기처리하고 셋카트리스트에 업데이트카트 넣어주기
                //7-6. App 가서도 업데이트카트 받아서 진행하기         
            }, 0);
            return updateCart; //8-1.
        };


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
                    <th></th>
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
                    <td><button  
                        onClick={()=>{handleOrder('each',cartItems.pid, cartItems.size)}}
                        style={{width:'200px', padding:'30px', backgroundColor:'lightcyan'}}>계속담아두기 ( 개별 주문 )
                        </button> 
                    </td>  
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


