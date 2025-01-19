import Item from './Item.jsx';
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function ProductList() {
    const [list,setList] = useState([]);

    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    },{});

// 상품을 한줄에 3개씩만 하고싶음
    const rows = []
    for(let i = 0 ; i <list.length ; i+=3){
        rows.push(list.slice(i,i+3));
    }   


    return (
        <div>
            {rows.map((array)=>
                <div className='product-list'>
                    {array.map((item)=>
                        <Item img={item.img}/>
                    )}
                </div>                
            )}
        </div>

    );
}

