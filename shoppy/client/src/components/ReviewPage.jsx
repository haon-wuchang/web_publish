import React from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
export default function ReviewPage({pageNum, setPageNum,endPageLength}) {
    const handlepagePrePre = () => {  // << 클릭함수
        setPageNum(1);
    }
    const handlepagePre = () => { // < 클릭함수
        if(pageNum === 1){
            setPageNum(1)
        } else {
            setPageNum(pageNum-1) 
        }
    }
    const handlePage = (num) => {  // 현재 페이지
        setPageNum(num);
    }
    const handlePageNext = () => { // > 클릭함수
        if(pageNum<endPageLength){
            setPageNum(pageNum+ 1) ;
        } else{
            alert('마지막페이지 입니다');
        }
    }
    const handlePageNextNext = () => { // >> 클릭함수
        setPageNum(endPageLength);
    }


    return (
        <>
        <span onClick={handlepagePrePre}><TfiAngleDoubleLeft /></span>
        <span onClick={handlepagePre}><TfiAngleLeft /></span>
        <span className='review-next-page-num' onClick={()=>handlePage(1)}>1</span>
        <span className='review-next-page-num' onClick={()=>handlePage(2)}>2</span>
        <span className='review-next-page-num' onClick={()=>handlePage(3)}>3</span>
        <span className='review-next-page-num' onClick={()=>handlePage(4)}>4</span>
        <span onClick={handlePageNext}><TfiAngleRight /></span>
        <span onClick={handlePageNextNext}><TfiAngleDoubleRight /></span>
        </>
    );
}

