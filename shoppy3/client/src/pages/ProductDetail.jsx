import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetail({handleCarts}) {
    const [size,setSize] = useState('XS');
    const {pid} = useParams();
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res)=>{
                res.data.filter((item)=>{
                    if(item.pid===pid){
                        setList(item);
                    }
                })
            })
            .catch(error => console.log(error));
    },[]);

    const handleCart = () => {
        const cartItem = {
            "pid" : list.pid,
            "name" : list.name,
            "price": list.price,
            "size":size,
            "qty":1
        }
        handleCarts(cartItem);
    }
    

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={list.img} />
                <ul>
                    <li className="product-detail-title">{list.name}</li>
                    <li className="product-detail-title">{list.price}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2'
                            onChange={(event)=>{setSize(event.target.value)}}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className='product-detail-button'
                           onClick={handleCart} >장바구니 추가</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

