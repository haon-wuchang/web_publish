import React, { useEffect,useState } from 'react';
import Item from './Item.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ItemList() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    },[]);

    const array = [];
    for(let i = 0; i<list.length; i+=3){
        array.push(list.slice(i,i+3))
    }

    return (
        <div>
            {array.map((firstArray)=>
                <div className='product-list'>
                    {firstArray.map((items)=>
                    <Link to ={`/product/detail/${items.pid}`}>
                        <Item img={items.img}/>
                    </Link>
                    )}
                </div>
            )}
        </div>

    );
}

