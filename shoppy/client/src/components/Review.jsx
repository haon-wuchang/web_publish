import React, { useEffect } from 'react';
import {useState} from 'react';
import ReviewProductLike from './ReviewProductLike';
import ReviewBoxAll from './ReviewBoxAll';
import ReviewPage from './ReviewPage';

export default function Review() {
    const [reviewTap, setReviewTap] = useState([]);
    const [reviewData ,setReviewData] = useState([]);
    const [ProductLike,setProductLike] = useState([]);

    useEffect(()=>{
        fetch('/data/review.json')
            .then(data => data.json())
            .then(jsonData => {
                setReviewTap(jsonData.reviewTap);
                setReviewData(jsonData.reviewData);
                setProductLike(jsonData.ProductLike);
                })
            .catch(error => console.log(error));
    },[]);

    const [pageNum, setPageNum] = useState(1); // 페이지 초기값
    const [slicePages, setSlicePages] = useState([]); //페이지 값 관리
    const endPageLength = reviewData.length / 6;   
    const page = 6;                          // 한페이지당 리뷰 6개씩 출력
    const endPage = (pageNum * page) ;  
    const startPage = (endPage - page) ;

    useEffect(()=>{
        setSlicePages(reviewData.slice(startPage,endPage));
    },[reviewData,pageNum]);
   


    return (
        <div className='review-all'>
            <ReviewProductLike reviewData={reviewData} ProductLike={ProductLike}/>
            <ReviewBoxAll reviewTap={reviewTap}             
                reviewData={reviewData} 
                slicePages={slicePages}/>
            <div className='review-next-page'>
                <ReviewPage  pageNum={pageNum}  
                    setPageNum={setPageNum} 
                    endPageLength={endPageLength}/>
            </div>
        </div>
    );
}


