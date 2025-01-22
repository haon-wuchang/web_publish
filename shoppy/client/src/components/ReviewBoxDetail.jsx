import React from 'react';
import { GoThumbsup } from "react-icons/go";
import {useState} from 'react';


export default function ReviewBoxDetail({item}) {
    const [thumbsNum,setThumsNum] = useState(0);
        
    const reviewBoxThumbsUp = () => {
        setThumsNum(thumbsNum+1);
    }
    return (
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
    );
}

