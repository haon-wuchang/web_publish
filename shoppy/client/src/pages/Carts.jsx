import React, { useState,useEffect ,useContext } from 'react'; 
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js'; 
import { useNavigate } from 'react-router-dom'; 

export default function Carts() {
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
                console.log('res=',res.data);          
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
        },[]);
        console.log('cartList',cartList);
        
        const handleOrder = () => {
            // console.log('isLoggedIn==',isLoggedIn); 
            if(isLoggedIn){  
                const id = localStorage.getItem('user_id'); 
                const formData = {'id':id, 'cartList':cartList} 
                 axios
                    .post('http://localhost:9000/cart/add',formData) 
                    .then(res => {
                        console.log('res=',res.data) ;
                        if(res.data.result_rows){
                            alert('장바구니에 추가되었습니다'); 
                            localStorage.removeItem('cartItems'); 
                        }
                    })
                    .catch(error => console.log(error));
            }else { 
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
                    <td><button>계속담아두기</button></td>  {/*e. 누르면 해당상품만 저장되게 2/14 */}
                </tr> 
                )}
            </table>
            <button onClick={handleOrder}
            style={{width:'200px', padding:'20px', backgroundColor:'yellow'}}>
                주문하기
            </button>
        </div>
    );
}


