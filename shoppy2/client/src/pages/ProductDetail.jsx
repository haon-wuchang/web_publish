import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
    const {id} = useParams();

    const [list,SetList] = useState({});
    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res)=>{
                res.data.filter((item)=>{
                    if(item.id === id)
                        SetList(item);                                        
                })
            })
            .catch(error=>console.log(error));
    },[]);

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={list.img} />
                <ul>
                    <li className="product-detail-title">{list.name}</li>
                    <li className="product-detail-title">{list.price}</li>
                    <li className="product-detail-subtitle">{list.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2'>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className='product-detail-button'>장바구니 추가</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

