import React, { useEffect, useState } from 'react';
import ProductAvatar from './ProductAvatar';
import axios from 'axios';

export default function ProductList() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/products.json')
            .then((res)=>     // => d여기서 가져오는 res 는 {} 오브젝트리터럴로 묶여잇당 여기에 있는 data 를 가져오려면 res.data 이케 하면댄당 d이 data 는 내가 json 에서 만든 데이터ㅣㅁ임용
                setList(res.data)
            )
            .catch(error=> console.log(error));
    },[])

    const rows = [];    
    for(let i=0; i < list.length; i += 3) {
        rows.push(list.slice(i , i+3));
    }  

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
// fetch 는 json 으로 바꾸는 과정을 꼭 거쳐야한당 => 자바에서 많이씀
// axios 는 json 으로 바꿀 필요가 없다 => 리액트.노드에서 많이씀


// axios 는  네트워크로 접속을한다 => 따라서 서버와 서버끼리 연동할때 사용한다 (서로다른 시스템을 연동할때 사용)
//  import axios from 'axios';

