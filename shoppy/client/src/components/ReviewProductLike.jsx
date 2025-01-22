import React from 'react';

export default function ReviewProductLike({reviewData,ProductLike}) {
    return (
        <div className='review-product-like-box'>
        <div className='review-product-like-top'>
            <div className='review-product-like-left'>                        
                <h5>상품 만족도 ({reviewData.length})</h5>
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
            {ProductLike && ProductLike.map((item)=>
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
    );
}

