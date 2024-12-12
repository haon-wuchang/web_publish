import { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList() {
    const [productList, setProductList] = useState([]);

    const[input, setInput]=useState('total');

    useEffect(()=>{
        fetch('/practice-data/olive.json')
            .then(data=>data.json())
            .then(jsonData=> {
                if(input==='total'){
                setProductList(jsonData)}
                else{
                    jsonData.filter((item)=>item.tags===input)
                    setProductList(jsonData.filter((item)=>item.tags===input))
                }
            })
            .catch(error=>console.log(error));
    },[input])
    const inputCheck = (event) => {
        setInput(event.target.value);
        
    }
    return(
        <>
        <div className='zz'>
            <input type="radio" name="choose" onClick={inputCheck} value='total'/>전체
            <input type="radio" name="choose" onClick={inputCheck} value='sale'/>세일
            <input type="radio" name="choose" onClick={inputCheck} value='coupon'/>쿠폰
            <input type="radio" name="choose" onClick={inputCheck} value='today'/>오늘드림
        </div>
        <div className='z'>
            <ul>
                {productList && productList.map((item)=>
                    <li>
                        <Product img={item.img}
                            title={item.title}/> 
                    </li>
                )}
            </ul>
        </div>
        </>
    );
}