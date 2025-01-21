import React from 'react';
import { GoThumbsup } from "react-icons/go";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

export default function Review() {
    return (
        <div className='review-all'>
            <div className='review-product-like-box'>
                <div className='review-product-like-top'>
                    <div className='review-product-like-left'>
                        <h5>상품 만족도 (2)</h5>
                        <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                        <div className='review-product-like-rate'>
                        💜💜💜💜💜 5 / 5.0
                        </div>
                    </div>
                    <div className='review-product-like-right'>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>사이즈</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>적당함</span>
                                <div className='review-product-rate-bg-bar'>
                                    <div className='review-product-rate-bar'></div>
                                    </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음</span>
                                <div className='review-product-rate-bg-bar'>
                                    <div className='review-product-rate-bar'></div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                        </ul>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>색상</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>적당함</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                        </ul>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>소재</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>적당함</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bg-bar'><div className='review-product-rate-bar'></div></div>
                                <span>50%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='review-product-like-bottom'>   
                    <img src="https://media.wconcept.co.kr/review/306182087/306182087_1731597728097.jpeg?RS=300" alt="" />
                    <img src="https://media.wconcept.co.kr/review/306182087/306182087_1731597728097.jpeg?RS=300" alt="" />
                    <img src="https://media.wconcept.co.kr/review/306182087/306182087_1731597728097.jpeg?RS=300" alt="" />
                </div>
            </div> {/* 상품만족도 끝 */}            
            <div>
                <ul className='review-tap'>
                    <li>최신순</li>
                    <li>평점 높은순</li>
                    <li>평점 낮은순</li>
                    <li>추천순</li>
                </ul>
                <div className='review-box'>
                    <div className='review-star'>
                        💜💜💜💜💜
                    </div>
                    <div className='review-detail'>
                        <div className='review-detail-top'>
                            <div className='review-detail-top-left'>                                	
                                <h5>
                                    <span>구매옵션 : </span> 
                                    <span>MEDIUM</span>
                                </h5>
                                <h5> 
                                    <span>사이즈정보 : </span>
                                    <span>164cm,61kg</span>
                                </h5>
                            </div>
                            <div className='review-detail-top-right'>
                                <span>nj********</span>
                                <span>2024.12.07</span>
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
                            <img src="https://media.wconcept.co.kr/review/306182087/306182087_1733542286789.jpeg?RS=300" 
                                alt="" 
                                className='review-img'/>
                            <p className='review-text'>상당히 오버핏입니다. 특히 소매부분이 그렇습니다.
                            오버핏 좋아해서 품고요, 모자를 뗀 것이 더 예쁜 것 같습니다. 상당히 따뜻합니다.</p>
                            <div className='review-bottom'>
                                <div className='review-bottom-left'>
                                    <ul >
                                        <li>신고</li>
                                        <li>숨김</li>
                                    </ul>
                                </div>
                                <div className='review-bottom-right'>
                                    <div>
                                        <span><GoThumbsup /></span>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div> {/* 리뷰 끝 */}  
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

