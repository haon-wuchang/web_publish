import React, { useEffect } from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import {useState} from 'react';
import ReviewProductLike from './ReviewProductLike';
import ReviewBoxAll from './ReviewBoxAll';

// 얘로 리뷰탭 

export default function Review() {
    const [reviewTap, setReviewTap] = useState([]);
    const [reviewData ,setReviewData] = useState([]);
    const [test,setTest] = useState([]);
    const [cate,setCate] = useState('new');

    useEffect(()=>{
        fetch('/data/review.json')
            .then(data => data.json())
            .then(jsonData => {
                setReviewTap(jsonData.reviewTap);
                if(cate === 'new'){
                    setReviewData(jsonData.reviewData);
                    } else {
                        const a = jsonData.reviewData.filter((tab)=>
                            tab.reviewCategory === cate)
                            setReviewData(a);
                    }
                    setTest(jsonData.test);
                })
            .catch(error => console.log(error));
    },[]);

    return (
        <div className='review-all'>
            <ReviewProductLike reviewData={reviewData} test={test}/>
            <ReviewBoxAll reviewTap={reviewTap} reviewData={reviewData}/>
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

