import React from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
export default function ReviewPage({pageNum, setPageNum}) {
    // const handlepagePrePre = () => {  // <<페이지클릭함수
    //     setPageNum(startPage);
    // }
    const handlepagePre = () => { // <페이지클릭함수
        if(pageNum === 1){
            setPageNum(1)
        } else {
            setPageNum(pageNum-1) 
        }
    }
    const handlePage = (num) => {
        setPageNum(num);
    }
    const handlePageNext = () => { // >페이지클릭함수
        setPageNum(pageNum+ 1) ;
    }
    // const handlePageNextNext = () => { // >>페이지클릭함수
    //     setPageNum(endPage);
    // }


    return (
        <>
        {/* <span onClick={handlepagePrePre}><TfiAngleDoubleLeft /></span> */}
        <span onClick={handlepagePre}><TfiAngleLeft /></span>
        <span className='review-next-page-num' onClick={()=>handlePage(1)}>1</span>
        <span className='review-next-page-num' onClick={()=>handlePage(2)}>2</span>
        <span onClick={handlePageNext}><TfiAngleRight /></span>
        {/* <span onClick={handlePageNextNext}><TfiAngleDoubleRight /></span> */}
        </>
    );
}

