import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import Detail from "../components/Detail.jsx";
import Review from '../components/Review.jsx'
import QnA from "../components/QnA.jsx";
import ReturnDelivery from '../components/ReturnDelivery.jsx'

export default function DetailProduct({ addCart }) {
    const tabList = [
        {'name': 'DETAIL'},
        {'name': 'REVIEW'},
        {'name': 'Q&A'},
        {'name': 'RETURN & DELIVERY'}
    ];

    // 1. 이 pid 를 서버-MVC 레파지토리까지 넘겨줘야함
    const { pid } = useParams();  // url 통해서 넘어온느거닌 다 get 방식이야
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS"); 
    const [category, setCategory] = useState('Q&A');
    const [select, setSelect] = useState('Q&A');

    const handleChangeSelect = (name) => {
        setSelect(name);
        setCategory(name);
    }

    // 1-1. 데이터잇는 서버 주소 받아오고 pid 는 서버로 넘겨주기
    useEffect(() => {
        axios
            .post("http://localhost:9000/product/detail",{"pid":pid}) //1-2. 이 서버주소 만들기
            .then((res) => {
                console.log('res===>',res.data);
                })            
            .catch((error) => console.log(error));
    }, []); 

    //장바구니 추가 버튼 이벤트
    const addCartItem = () => {
      //장바구니 추가 항목 : { pid, size, count, price }
      // alert(`${pid} --> 장바구니 추가 완료!`);
      // console.log(product.pid, product.price, size, 1);
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1,
            price: product.price,
        };
        addCart(cartItem); // App.js의 addCart 함수 호출
    };  

    // 카테고리 선택 이벤트
    const handleDetail = () => {
        setCategory('detail');
    }

    const handleReview = () => {
        setCategory('review');
    }

    const handleQnA = () => {
        setCategory('qna');
    }
    const handleReturnDelivery = () => {
        setCategory('returndelivery');
    }

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    <ul className="product-detail-image-top-list">
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                    </ul>
                </div>    
                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">
                        {`${parseInt(product.price).toLocaleString()}원`}
                    </li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                    </li>
                    <li className="flex">
                        <label className="product-detail-label">사이즈 </label>
                        <select
                            className="product-detail-select2"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className="flex">
                        <button type="button" className="product-detail-button order">
                        바로 구매
                        </button>
                        <button
                            type="button"
                            className="product-detail-button cart"
                            onClick={addCartItem}
                        >
                        쇼핑백 담기
                        </button>
                        <div type="button" className="gift">
                            <PiGiftThin />
                            <div className="gift-span">선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className="product-detail-summary-info">
                            <li>상품 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>  
            {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
            <div className="product2-detail-tab">
                <ul className="product2-detail-tab-ul">
                    { tabList && tabList.map((item) => (
                        <li className={ select === item.name ? "product2-detail-tab-li onClick" : 
                        "product2-detail-tab-li" }>
                            <a onClick={() => handleChangeSelect(item.name)}>{item.name}</a>
                        </li>
                    )) }
                </ul>
                <div className="una-qna-list">
                    { category === 'DETAIL' ? <Detail /> : null }
                    { category === 'REVIEW' ? <Review /> : null }
                    { category === 'Q&A' ? <QnA /> : null }
                    { category === 'RETURN & DELIVERY' ? <ReturnDelivery /> : null }
                </div>
            </div>
        </div>
    );
}

