import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function Carts() {
    //6-1. 받아온데이터를 cartItems 에 넣을꺼라 얘를 useState 가 관리하게 만들기
    // 4.로컬스토리지에 담긴 cartItems의 배열객체 출력
    const [cartItems,setCartItems] =useState(JSON.parse(localStorage.getItem('cartItems')));  //겟아이템으로 로컬스토리지의 데이터를 가져온다
   // 로컬스토리지값을 받아와서 문자열로 변경? => JSON.parse  얘는 좀 찾아바..
    // console.log('c',cartItems); 
    //4-1. cartItems의 pid 값을 받는 배열 생성 후 pid 값을 생성한 배열에 추가
    const pids = cartItems&&cartItems.map((item)=>item.pid); 
     // map 실행한결과는 새로운배열에 만들어짐 ( 그래서 따로 변수로 배열안만들어도 됨 ,push 도 안해도되고)
    // console.log('pids',pids);

    //7-1.
    useEffect(()=>{
        if(pids.length > 0){
            //5. axios 이용하여 db 연동작업
            axios
            .post('http://localhost:9000/product/cartItems',{'pids':pids}) //5-1. 오브젝트리터럴형태로 넘어가야해서 {pids} 
            .then(
                res =>{ 
                console.log('res=',res.data);   //6. 레파지토리-컨트롤러에서 보낸값 받음         
            //6-2. cartItems 에 res.data 의 정보 추가
            const updateCartItems = cartItems.map((item,index)=>
                                            item.pid === res.data[index].pid &&
                                            {...item, 
                                                'pname':res.data[index].pname, 
                                                'price':res.data[index].price,
                                                'image':res.data[index].image,
                                                'description':res.data[index].description
                                            } 
                                        );
                                        //6-3.updateCartItems 를 setCartItems 에 넣어주기
                setCartItems(updateCartItems);           
                                    })
            .catch(error => console.log(error));                                    
           }
        },[]);
        //7. 근데 이케하면 콘솔이 무한으로 찍히게 된다 얘를 useEffect 를 사용해서 react 가 관리하게 만들어준다
        console.log('cartItems',cartItems);
        
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
                {cartItems&& cartItems.map((cartItems)=>
                <tr style={{textAlign:'center', fontSize:'25px'}}>
                    <td><img src={cartItems.image} alt="" style={{width:'200px'}} /></td>
                    <td>{cartItems.pid}</td>
                    <td>{cartItems.pname}</td>
                    <td>{cartItems.description}</td>
                    <td>{cartItems.size}</td>
                    <td>{cartItems.qty}</td>
                    <td>{cartItems.price}</td>
                </tr> 
                )}
            </table>
        </div>
    );
}

// ㄱ.로컬스토리지에 잇는데이터는 새로고침해도 사라지면 절대로 안되는데 만약에 사라지는경우에 아래 내용 확인해보기
//<삭제되는 경우>
// 1.브라우저 업데이트 충돌발생한 경우 -> 얜 거의없음
// 2. useState 로 관리되는 데이터가 저장이안되거나, 로직이 잘못된경우 
// ( 쿠키는 사라질수도잇댕 )
