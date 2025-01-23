import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Detail from '../components/Detail.jsx';
import Review from '../components/Review.jsx';
import Star from '../components/Star.jsx';


export default function ProductDetail({selectCart}) {
    const {id} = useParams();

    const [list,SetList] = useState({});
    const [imgList,SetImgList] = useState([]);
    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res)=>{
                res.data.filter((item)=>{
                    if(item.id === id)
                        SetList(item);   
                        SetImgList(item.imgList);                                     
                })                
            })
            .catch(error=>console.log(error));
    },[]);

    const [size, setSize] = useState('XS');

    const addCart = () => {
        const cartItem = {
            "id" : list.id,
            "name" : list.name,
            "price" : list.price,
            "size" : size,
            "qty" : 1,
            "img":list.img
        }
        selectCart(cartItem);
    }
    const [namess, setNamess] = useState('Detail')

    const names = ['Detail',
                "Review",
                "Q&A",
                "RETURN & DELIVERY"];

    const [reviewTopList, setReviewTopList] = useState([]);
    const [reviewBottomList, setReviewBottomList] = useState([]);
    const [reviewTab, setReviewTab] = useState([]);
    const [category, setCategory] = useState('new');


        

    useEffect(()=>{
        axios.get('/data/review.json')
            .then(
                (res) => {
                    setReviewTopList(res.data.reviewTop)
                    setReviewTab(res.data.reviewTab)
                    if(category === 'new'){
                        setReviewBottomList(res.data.reviewBottom)
                    }else{
                        const a = res.data.reviewBottom.filter((item)=>item.category === category)                                             
                        setReviewBottomList(a);
                    }
                }
        )
            .catch(error => console.log(error));
    },[category]);
    
    const reviewBottomLength = reviewBottomList.length;

    const grandCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className='content'>
            <div className='product-detail'>
                <div>
                    <img src={list.img} />
                    <div className='product-detail-picture3'>
                    {imgList.map((img,i) => 
                        i<3 &&
                        <img src={img}/>                        
                    )}
                    </div>
                </div>
                <ul>
                    <li className="product-detail-title">{list.name}</li>
                    <li className="product-detail-title">{list.price}</li>
                    <li className="product-detail-subtitle">{list.info}</li>
                    <li className='product-detail-star'>
                        <span ><Star /></span>
                        <span>5.0</span>
                        <span>{reviewBottomLength}개 리뷰</span>
                    </li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2'
                            onChange={(event)=> setSize(event.target.value)}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className='product-detail-button'
                            onClick = {addCart}>장바구니 추가</button>
                    </li>
                </ul>
            </div>
            
            <div className='product-detail-tab'>
                <ul>
                    {names.map((name)=>
                        (name === 'Review') ? 
                        <li onClick={()=>setNamess(name)}><a>{name}({reviewBottomLength})</a></li>:
                        <li onClick={()=>setNamess(name)}><a>{name}</a></li>
                    )}
                </ul>
            </div>
            <div className='tab-contents'>
               { namess === 'Detail' &&  <Detail imgList={imgList}/>}
                {namess === 'Review' &&  <Review reviewTopList={reviewTopList}
                                                reviewBottomList={reviewBottomList}
                                                reviewTab={reviewTab} 
                                                grandCategory={grandCategory}
                                                reviewBottomLength={reviewBottomLength}/>}
                                               
                
            </div>
        </div>
    );
}

