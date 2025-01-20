import React, { useEffect,useState } from 'react';
import Item from './Item.jsx';
import axios from 'axios';

export default function ItemList() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/product.json')
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    },[]);

    const rows = [];
    for(let i =0 ; i < list.length; i +=3){
        rows.push(list.slice(i,i+3));
    }


    return (
        <div>
            {rows.map((array)=>
                <div className='product-list'>
                {array.map((items)=>
                    <Item img={items.img}/>
                )}
                </div>
            )}
        </div>
    );
}

