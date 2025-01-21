import React from 'react';
import { GoThumbsup } from "react-icons/go";
import {useState} from 'react';


export default function ReviewBox() {

const reviewdata = [
   { 
    "customerid":"a*******",
    "reviewUploadDate":"2012.01.02",
    "reviewCategory":"new"
    },
    { 
    "customerid":"b***********",
    "reviewUploadDate":"2013.01.01",
    "reviewCategory":"highRate"
    },
    { 
    "customerid":"c**********",
    "reviewUploadDate":"2014.01.01",
    "reviewCategory":"rowRate"
    },
    { 
    "customerid":"d**********",
    "reviewUploadDate":"2015.01.01",
    "reviewCategory":"thumbs"
    }    
]


const [thumbsNum,setThumsNum] = useState(0);

const reviewBoxThumbsUp = () => {
    setThumsNum(thumbsNum+1);
}

    return (
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
                                    <div onClick={reviewBoxThumbsUp}>
                                        <span><GoThumbsup /></span>
                                        <span>{thumbsNum}</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>  
    );
}

