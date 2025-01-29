import React from 'react';
import ReviewTab from './ReviewTab';
import ReviewThumbs from './ReviewThumbs';
import Star from './Star.jsx';
import Test from './Test.jsx';
// import Modal from './Modal.jsx';
// import { useState } from 'react';


export default function Review({reviewTopList,reviewBottomList,reviewTab,grandCategory,reviewBottomLength}) {
    const momCategory = (category) => {
        grandCategory(category);
    }


    let count = reviewBottomList.filter((a)=>a.img === null ).length ;             
    // console.log(count); 이미지 없는 리뷰 갯수

    return (
        <div className='review-box'>
            <h3>상품만족도({reviewBottomLength})</h3>
            <div className='review-top'>
                <div className='review-top-left'>
                    <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                    <Star totalRate={4.2} className="star-black-big" />
                </div>
                <div className='review-top-right'>
                    {reviewTopList&& reviewTopList.map((item)=>
                        <div className='review-top-right-box'>
                            <h5>{item.topNm}</h5>
                            <div className='review-top-bar-box'>
                                <span>{item.subNm1}</span>
                                <div className='bar-bg'>
                                    <div className='bar-real' style={{"width":`${item.subPer1}%`}}></div>
                                </div>
                                <span >{item.subPer1}%</span>
                            </div>
                            <div className='review-top-bar-box'>
                                <span>{item.subNm2}</span>
                                <div className='bar-bg'>
                                    <div className='bar-real' style={{"width":`${item.subPer2}%`}}></div>
                                </div>
                                <span >{item.subPer2}%</span>
                            </div>
                            <div className='review-top-bar-box'>
                                <span>{item.subNm3}</span>
                                <div className='bar-bg'>
                                    <div className='bar-real' style={{"width":`${item.subPer3}%`}}></div>
                                </div>
                                <span >{item.subPer3}%</span>
                            </div>
                        </div>                     
                    )}
                </div>
            </div>
                <ul className='review-customer-img'>
                    <Test reviewBottomList={reviewBottomList} count={count}/>
                </ul>
                <ul className='review-tab'>
                    {reviewTab && reviewTab.map((item)=>
                        <ReviewTab tabNm={item.tabNm} category = {item.tabCategory}
                        momCategory={momCategory} />                    
                    )}
                </ul>
                <table className='review-table'>
                {reviewBottomList && reviewBottomList.map((item)=>
                    <tr className='review-table-row'>
                        <td className="review-list-star">
                            <Star totalRate={3.4} className="star-black-review"/>
                        </td>
                        <td className='review-table-box'>
                            <div className='review-first-line'>
                                <div>
                                    <p>
                                        <span>구매옵션 : sdfsadfsdsdf</span>
                                        
                                    </p>
                                    <p>
                                        <span>사이즈정보 : asdfsdfd</span>
                                    </p>
                                </div>
                                <p>
                                    <span className='id'>{item.customerId}</span>
                                    <span>{item.reviewDate}</span> 
                                </p>
                            </div>
                            <ul className='review-second-line'>
                                <div><span>사이즈</span><span>적당함</span></div>
                                <div><span>색상</span><span>적당함</span></div>
                                <div><span>소재</span><span>적당함</span></div>
                            </ul>
                            <ul className='review-third-line'>
                                <li><img src={item.img} alt="" /></li>
                            </ul>
                            <p className='review-four-line'>
                                {item.text}
                            </p>
                            <div className='review-five-line'>
                                <div>
                                    <button>신고</button>
                                    <button>숨김</button>
                                </div>
                                <ReviewThumbs/>
                            </div>
                        </td>
                    </tr>
                
                )}
                </table>
        </div>
    );
}

