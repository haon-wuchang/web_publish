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


    return (
        <div>
            {list&&list.map((item)=>
                <ProductAvatar img={item.img}/>
            )}
        </div>
    );
}

// 자바스ㅡ크립트 함수인 for 이런거는 return 안에 못들어감용 return 밖에 써야댕 !
// return 안에는 map, filter ㅁ만 쓸수잇엉