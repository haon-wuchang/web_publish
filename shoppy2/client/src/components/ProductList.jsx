import React, { useEffect,useState } from 'react';
import Avata from './Avata.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ProductList() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res)=>
                setList(res.data)
            )
            .catch(error => console.log(error));
    },[])

    const outArray = [];
    for(let i=0 ; i < list.length ; i+=3 ){
        outArray.push(list.slice(i,i+3)) 
    }


    return (
            <div>
                {outArray.map((array)=>
                    <div className='product-list'>
                    {array.map((item)=>
                        <Link to = {`/detail/${item.id}`}>
                            <Avata img = {item.img}/>                        
                        </Link>
                    )}
                    </div>
                )}
            </div>

    );
}

