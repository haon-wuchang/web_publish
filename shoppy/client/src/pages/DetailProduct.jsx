import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct() {
    const {pid} = useParams(); 

    // 각ㄱ각의 상품들 정보를 가져오기 
    const [product,SetProduct] = useState({}); // product 가 json 데이터의 {} 이거 하나임 그래서 useState 초기값을 {} 로 한거임
    useEffect(()=>{
        axios.get('/data/products.json')
            .then((res)=> {                   
                res.data.filter((product)=> {    
                        if(product.pid === pid)
                            SetProduct(product) ;                                                      
                })                  
            })       
            .catch(error => console.log(error));
    },[]);
    
    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={product.img} />
                <ul>
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{product.price}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
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

