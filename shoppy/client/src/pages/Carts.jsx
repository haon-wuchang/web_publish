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
        },[cartList]);  // 4. cartList 추가하기 ,, 근데 이렇게하고 상품다시고르면 이전에 잇던애들이 전부나온다
        //                  => App.js 는 초기화가 안되서 그렇다 
        // console.log('cartList',cartList);

        
        const handleOrder = (type,pid, size) => {   // 1-3. 파라미터 받아오기  type = all 인지 each 인지
            // console.log('isLoggedIn==',isLoggedIn); 
            // console.log(type, pid, size);  //1-4. 잘넘어오는지 확인 (확인작업 시 db 연동되면 안되니까 axios 주석처리하고 진행)
            
            const id = localStorage.getItem('user_id'); 
            let formData = [];
            if(type === 'all'){  //1-5. 타입으로 나눠서 서버로 넘길 정보 구분하기
                formData = {id:id, cartList:cartList} ;
            } else{
                const filterItem = cartList.filter((item)=> item.pid === pid && item.size === size );
                // const filterItem = cartList.filter((item)=> !(item.pid === pid && item.size === size) ); //상품1개빼고 다 저장할때는 이렇게
                formData = {id:id, cartList:filterItem};
            }
            // console.log(formData); //1-6. 로직짠대로 잘 넘어오는지 확인
            

            if(isLoggedIn){  
                 axios
                    .post('http://localhost:9000/cart/add',formData) 
                    .then(res => {
                        // console.log('res=',res.data) ;
                        if(res.data.result_rows){
                            alert('장바구니에 추가되었습니다'); 
                            //2. 주문하기 누름녀 로컬스토리지에서도 지우고 화면에 업데이트 진행하기 
                            // all / each 일때 구분해서 지우기
                            if(type === 'all'){                                
                                clearStorageAll();//3. 리무브랑 셋카트리스트 초기화를 하나의 함수안에 넣어서 진행한다
                                // localStorage.removeItem('cartItems');   // 2-2 얘는 비동기처리됨
                                // //2-1. 로컬스토리지는 외부에잇어서 애가 삭제된거를 바로알수가없다/
                                // // 2-2.그래서 cartList 를 초기화해주면 된다
                                // // 2-3. 그래서 setCartList([]);  얘도 같이 비동기처리하는곳에 보내야한다-> setTimeOut 함수사용
                                // setCartList([]); 

                                //5. App.js 의 카트리스트, 카트카운트 초기화작업 =>앱으로 이동
                                refreshStorage();  // 6-1.\


                                
                            } else { 
                                   
                            }
                        }
                    })
                    .catch(error => console.log(error));
            }else { 
                const select = window.confirm('로그인 먼저 해');
                select && navigate('/login'); 
            }
        }

        // 3-1.로컬스로리지 전체 아이템 삭제
        const clearStorageAll = () => {
            console.log('스토리지삭제 시작');
            
            // 3-2.이제 둘을 비동기처리하는곳에 한번에 넘겨야해서 setTimeOUt 안에 비동기처리 할 셋카트리스트를 넣어준다
            localStorage.removeItem('cartItems');
            setTimeout(() => {
                setCartList([]);                
            }, 0);
            console.log('스토리지삭제완');
            // 음 근데 이렇게해도 삭제되고 다른상품담으면 삭제된거 다시 뜨는데;;
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
                    <td><button  /* 1. 계속담아두기 누르면 해당상품만 저장되게  얘는 주문하기버튼이랑 기능이 거의 비슷하니까 재활용가능한지 확인*/
                        onClick={()=>{handleOrder('each',cartItems.pid, cartItems.size)}}
                        style={{width:'200px', padding:'30px', backgroundColor:'lightcyan'}}>계속담아두기 ( 개별 주문 )
                        </button>  {/*1-1. 계속담아두기는 해당 pid,size 가 넘어가야된다 */}
                    </td>  
                </tr> 
                )}
            </table>
            <button onClick={()=>{handleOrder('all')}}  /*1-2.얘는 전체 주문하기니까 all 이라는 파라미터를 넘길때만 전체주문 로직이 되고 그냥일때는 하나만 담아두기 임 */ 
            style={{width:'200px', padding:'20px', backgroundColor:'yellow'}}>
                주문하기
            </button>
        </div>
    );
}


