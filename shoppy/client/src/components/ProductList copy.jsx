import React, { useEffect, useState } from 'react';
import ProductAvatar from './ProductAvatar';

export default function ProductList() {
    const [list,setList] = useState([]); // !!useState 를 통해서 list 변경되면 실시간 업데이트가 된다
    useEffect(()=>{
        fetch('/data/products.json')
            .then((data)=>data.json())
            .then((jsonData)=>setList(jsonData))  
            // !! jsondata가 useEffect 안에서 사ㅡ는게 아니라 해당 { } 안에서만 사는거양 그래서 jsondata를 전역변수로 만들라고 useState 쓴거고 
            .catch(error => console.log(error));
    },[]);

// 출력리스트 생성
// 배열만들어서 배ㅕㅇㄹ안에 실제객체(3개씩묶어서 출력하고싶다) 하면 이케하면댕
// [ [{1},{2},{3}] , [{4},{5},{6}] , [{7}] ]  // 3개씩 끊는거는 list 를  통해서 한다

    const rows = [];    
    for(let i=0; i< list.length; i+=3){
        rows.push(list.slice(i , i+3));
    }
    // console.log(rows);
    

    return (
        <div>
            {rows.map((rowsArray)=>     
                <div className='product-list'>
                    {rowsArray.map((data) => 
                        <ProductAvatar img={data.img}/>
                    )}
                </div>            
            )}
        </div>
    );
}
            // rows 는 2차원배열(배열2개)라서 map 도 2번돌린거임 . 
            // 겉에 배열 한번 안에 배열 한번 
// 첫번째 맵 돌린거는 겉에 [] 배열안쪽에 배열이 3개가 잇자나 그걸 돌리는거고
// 두번째 맵은 안쪽에 있는 배열 안에 {} 3개가 잇으니까 이거 배열을 돌린거임ㄴ


