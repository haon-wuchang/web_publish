import React, { useState } from 'react';
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

    //5. axios 이용하여 db 연동작업
    axios.post('http://localhost:9000/product/cartItems',{'pids':pids}) //5-1. 오브젝트리터럴형태로 넘어가야해서 {pids} 
        .then(
            res =>{ 
            console.log('res=',res.data);   //6. 레파지토리-컨트롤러에서 보낸값 받음         
           //6-2. cartItems 에 res.data 의 정보 추가
            const updateCartItems = cartItems.map((item,index)=>
                                        item.pid === res.data[index].pid ?
                                        {...item, 
                                            'pname':res.data[index].pname, 
                                            'price':res.data[index].price,
                                            'image':res.data[index].image,
                                            'description':res.data[index].description
                                        } : item
                                    );
            //6-3.updateCartItems 를 setCartItems 에 넣어주기
            setCartItems(updateCartItems);           
        })
        .catch(error => console.log(error));
        console.log('cartItems',cartItems);
        
    return (
        <div className='content'>
            <table border='1'>
                <tr>
                    <th>image</th>
                    <th>pid</th>
                    <th>pname</th>
                    <th>description</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                </tr> 
                {/* <tr>
                    <td>image</td>
                    <td>{item.pid}</td>
                    <td>{item.pname}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty}</td>
                </tr>  */}
            </table>
        </div>
    );
}

