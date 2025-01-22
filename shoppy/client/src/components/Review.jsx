import React, { useEffect } from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import {useState} from 'react';
import ReviewProductLike from './ReviewProductLike';
import ReviewBoxAll from './ReviewBoxAll';
import ReviewPage from './ReviewPage';

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

    const [pageNum, setPageNum] = useState(1);
    const [slicePages, setSlicePages] = useState([]);

    const page = 6;
    const endPage = (pageNum * page) ;
    const startPage = (endPage - page) ;

    useEffect(()=>{
        setSlicePages(reviewData.slice(startPage,endPage));
    },[reviewData,pageNum]);
    


    return (
        <div className='review-all'>
            <ReviewProductLike reviewData={reviewData} test={test}/>
            <ReviewBoxAll reviewTap={reviewTap} reviewData={reviewData} slicePages={slicePages}/>
            <div className='review-next-page'>
                <ReviewPage  pageNum={pageNum} setPageNum={setPageNum}/>
            </div>{/* 페이지칸 끝 */}  
        </div>
    );
}

// << 페이지처음 1로 감 >> 페이지마지막 100
// 페이지는 1~10 까지 있고 < > 는 10개씩 넘어감 1~10 에서 > 누르면 11~20 되는거임
// 한페이지에 리뷰 6개씩