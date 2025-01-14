import React, { useEffect, useState } from 'react';
import ProductAvatar from './ProductAvatar';
import axios from 'axios';

export default function ProductList() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/products.json')
            .then((res)=>     
                setList(res.data)
                // console.log(res)
                
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




