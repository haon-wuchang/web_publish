import React, { useEffect } from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { GoThumbsup } from "react-icons/go";
import {useState} from 'react';

export default function Review() {
    const [reviewTap, setReviewTap] = useState([]);
    const [reviewData ,setReviewData] = useState([]);
    const [test,setTest] = useState([]);

    useEffect(()=>{
        fetch('/data/review.json')
            .then(data => data.json())
            .then(jsonData => {
                    setReviewData(jsonData.reviewData)
                    setReviewTap(jsonData.reviewTap)
                    setTest(jsonData.test)
                })
            .catch(error => console.log(error));
    },[]);

    const [thumbsNum,setThumsNum] = useState(0);
    
    const reviewBoxThumbsUp = () => {
        setThumsNum(thumbsNum+1);
    }
    return (
        <div className='review-all'>
            <div className='review-product-like-box'>
                <div className='review-product-like-top'>
                    <div className='review-product-like-left'>                        
                        <h5>상품 만족도({reviewData.length})</h5>
                        <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                        <div className='star-flex'>
                            <div className='rating-star'>
                                <strong className='star' style={{width:"100%"}}></strong>
                            </div>
                            <span>5</span>
                            <span>/</span>
                            <span>5.0</span>
                        </div>
                    </div>
                    <div className='review-product-like-right'>                        
                    {test && test.map((item)=>
                        <>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>{item.title}</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>{item.subTitle1}</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width":`${item.per1}`}}></div>
                                    </div>
                                </div>
                                <span>{item.per1}</span>
                            </li>                   
                            <li className='review-product-rate-flex'>
                                <span>{item.subTitle2} </span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width":`${item.per2}`}}></div>
                                    </div>
                                </div>
                                <span>{item.per1}</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>{item.subTitle3}</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width":`${item.per3}`}}></div>
                                    </div>
                                </div>
                                <span>{item.per1}</span>
                            </li>
                        </ul>                       
                        </>
                        )}                            
                    </div>
                </div>
                <div className='review-product-like-bottom'>  
                {reviewData && reviewData.map((item)=>
                    <img src={item.img} alt="리뷰전체이미지" />
                )}; 
                </div>
            </div>     
            <div>
                <ul className='review-tap'>
                    {reviewTap && reviewTap.map((item)=>
                        <li>{item.tapNm}</li>                    
                    )}
                </ul>
                <div className='review-box'>
                    <table>
                        <colgroup>
                            <col style={{"width": "160px"}}></col>
                            <col style={{"width": "auto"}}></col>
                        </colgroup>
                        {reviewData && reviewData.map((item)=>
                            <tr>
                                <td className='td-star'>
                                    <div className='review-star'>
                                    {/* 💜💜💜💜💜 */}
                                        <strong className='star' style={{width:"100%"}}></strong>
                                    </div>
                                </td>
                                <td>
                                <div className='review-detail'>
                                <div className='review-detail-top'>
                                    <div className='review-detail-top-left'>                                   
                                        <h5>
                                            <span>구매옵션 : </span> 
                                            <span>{item.option}</span>
                                        </h5>
                                        <h5> 
                                            <span>사이즈정보 : </span>
                                            <span>{item.size}</span>
                                        </h5>
                                    </div>
                                    <div className='review-detail-top-right'>
                                        <span>{item.customerid}</span>
                                        <span>{item.reviewUploadDate}</span>
                                    </div>
                                </div>
                                    <ul className='review-detail-size'>
                                        <li>
                                            <span>사이즈</span> 
                                            <span>적당함</span>
                                        </li>
                                        <li>
                                            <span>색상</span> 
                                            <span>같음</span>
                                        </li>
                                        <li>
                                            <span>소재</span> 
                                            <span>같음</span>
                                        </li>
                                    </ul>
                                    <img src={item.img}
                                        alt="리뷰이미지" 
                                        className='review-img'/>
                                    <p className='review-text'>
                                        {item.reviewText}
                                    </p>
                                    <div className='review-bottom'>
                                        <div className='review-bottom-left'>
                                            <ul >
                                                <li>신고</li>
                                                <li>숨김</li>
                                            </ul>
                                        </div>
                                        <div className='review-bottom-right'>
                                            <div onClick={reviewBoxThumbsUp}> 
                                                <span><GoThumbsup /></span>
                                                <span>{thumbsNum}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        )}                       
                    </table>
                </div>
            </div>
                <div className='review-next-page'>
                    <span><TfiAngleDoubleLeft /></span>
                    <span><TfiAngleLeft /></span>
                    <span className='review-next-page-num'>1</span>
                    <span><TfiAngleRight /></span>
                    <span><TfiAngleDoubleRight /></span>
                </div>{/* 페이지칸 끝 */}  
        </div>
    );
}

