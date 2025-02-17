import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import TeacherDetail from "../components/TeacherDetail.jsx";
import Review from '../components/Review.jsx'
import QnA from "../components/QnA.jsx";
import ReturnDelivery from '../components/ReturnDelivery.jsx'
import TeacherImgList from '../components/TeacherImgList.jsx';
import { CartContext } from "../context/cartContext.js"; 
import { useContext } from "react"; 
import { AuthContext } from "../auth/AuthContext.js"; 
import { useNavigate } from "react-router-dom";

export default function DetailProduct() {
    const navigate = useNavigate();
    const {cartList,setCartList , cartCount,setCartCount} = useContext(CartContext);
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);

    const tabList = [
        {'name': 'DETAIL'},
        {'name': 'REVIEW'},
        {'name': 'Q&A'},
        {'name': 'RETURN & DELIVERY'}
    ];

    const { pid } = useParams();  // url 통해서 넘어온느거닌 다 get 방식이야
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS"); 
    const [category, setCategory] = useState('Q&A');
    const [select, setSelect] = useState('Q&A');

    const [imgList,setImgList]=useState([]); 
    const [detailImgList, setDetailImgList] = useState([]); 
    // detailImgList 를 상품상세페이지 디테일탭컴포넌트에 보내기
    const handleChangeSelect = (name) => {
        setSelect(name);
        setCategory(name);
    }

    useEffect(() => {
        axios
            .post("http://localhost:9000/product/detail",{"pid":pid}) 
            .then((res) => {
                console.log('res===>',res.data);               
                setProduct(res.data);                 
                setImgList(res.data.imgList); 
                setDetailImgList(res.data.detailImgList); 
                })            
            .catch((error) => console.log(error));
    }, []); 
    // console.log('imgList',imgList); 
    

    const addCartItem = () => {
        if(isLoggedIn){            
            //장바구니 추가 항목 : { pid, size, qty }
            const cartItem = {
                pid: product.pid,
                size: size,
                qty: 1,
            };
            const id = localStorage.getItem('user_id');
            // console.log('formData',formData);
            
            // 3. 쇼핑백담기 할때 기존장바구니에서 같은사이즈,같은상품이면 qty+1 진행할거임
            //cartItem에 잇는 pid,size 를 cartList(로그인 성공 시 cartList 준비하기 )의 item 과 비교해서 있으면
            // qty+1 진행하고 없으면 그냥 새로추가 
            console.log('detail',cartList); // 3-3. Header 에서 추가한 cartList값을 받아오는지 확인 
            // 3-4. 
            const findItem = cartList && cartList.find(item => item.pid === product.pid
                && item.size === size);
                // some 함수를 쓰면 결과가 true,false 로 나온다 
                // find 함수를 쓰면 결과가 해당하는 cartList의 요소가 나온다 => cid 도 나옴
                
                //3-5. findItem이 없으면 undefined 가 나오기 때문에 이케 비교
                if(findItem !== undefined){
                    console.log('수량업데이트');
                    //qty+1 로 업데이트 진행 => 얘는 cid 로 처리하는거임
                    //3-7. 업데이트 할 애 만들기 ( 업데이트는 put사용)
                    axios  
                    .put('http://localhost:9000/cart/updateQty',{'cid':findItem.cid})
                    .then(res =>{
                        // console.log(res.data);
                        if(res.data.result_rows) {
                            alert('장바구니에 추가되었습니다'); 
                        }
                    })
                    .catch(error => console.log(error)); 
                    
                }else{
                console.log('새로추가');
                const formData = {id:id, cartList:[cartItem]}; //3-6 formData 는 새로추가일떄만 사용해서 여기스콥안에 넣어줌
                axios  
                .post('http://localhost:9000/cart/add',formData)
                .then(res =>{
                    // console.log(res.data);
                    if(res.data.result_rows) {
                        alert('장바구니에 추가되었습니다'); 
                        setCartCount(cartCount+1)                     
                    }
                })
                .catch(error => console.log(error));           
                
            }



        }else{ 
            const select = window.confirm('로그인 서비스가 필요합니다 \n 로그인 하시겠습니까');
            if(select){
                navigate('/login'); 
            }            
        }
    };  
    // console.log('cartCount',cartCount); 

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
                    <TeacherImgList imgList={imgList} className="product-detail-image-top-list"/>  
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
                    { category === 'DETAIL' ? <TeacherDetail imgList={detailImgList}/> : null } 
                    { category === 'REVIEW' ? <Review /> : null }
                    { category === 'Q&A' ? <QnA /> : null }
                    { category === 'RETURN & DELIVERY' ? <ReturnDelivery /> : null }
                </div>
            </div>
        </div>
    );
}
// 카트에 담긴 상품정보 db에 들어가야함
//카트는 로그인햇을떄만 보이게 설정
