import React from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import ReviewBoxAll from './ReviewBoxAll.jsx';

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
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "50%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음 </span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "0%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "50%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                        </ul>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>색상</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>적당함</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "100%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "0%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "0%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                        </ul>
                        <ul className='review-product-rate-box'>
                            <li className='review-product-rate-title'>
                                <span>소재</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>적당함</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "100%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>작음</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "0%"}}></div>
                                    </div>
                                </div>
                                <span>50%</span>
                            </li>
                            <li className='review-product-rate-flex'>
                                <span>큼</span>
                                <div className='review-product-rate-bar-box'>
                                    <div className='review-product-rate-bg-bar'>
                                        <div className='review-product-rate-bar'
                                            style={{"width": "0%"}}></div>
                                    </div>
                                </div>
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
            <ReviewBoxAll />
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

