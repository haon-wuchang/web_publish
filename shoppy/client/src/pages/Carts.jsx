import React from 'react';
import axios from 'axios';

export default function Carts() {
    // 4.로컬스토리지에 담긴 cartItems의 배열객체 출력
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));  //겟아이템으로 로컬스토리지의 데이터를 가져온다
   // 로컬스토리지값을 받아와서 문자열로 변경? => JSON.parse  얘는 좀 찾아바..
    // console.log('c',cartItems); 
    //4-1. cartItems의 pid 값을 받는 배열 생성 후 pid 값을 생성한 배열에 추가
    const pids = cartItems&&cartItems.map((item)=>item.pid); 
     // map 실행한결과는 새로운배열에 만들어짐 ( 그래서 따로 변수로 배열안만들어도 됨 ,push 도 안해도되고)
    console.log('pids',pids);

    //5. axios 이용하여 db 연동작업
    axios.post('http://localhost:9000/product/cartItems',{'pids':pids}) //5-1. 오브젝트리터럴형태로 넘어가야해서 {pids} 
        .then(
            res => console.log('res=',res.data)            
        )
        .catch(error => console.log(error));
    

    return (
        <div className='content'>
            <table border='1'>
                <tr>
                    <th>pid</th>
                    <th>size</th>
                    <th>price</th>
                    <th>qty</th>
                </tr> 
            {/* {cartList.map((item)=> */}
                <tr>
                    {/* <td>pid</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td> */}
                </tr> 
            {/* )} */}
            </table>
        </div>
    );
}

