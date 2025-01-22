import React, { useEffect } from 'react';
import {useState} from 'react';
import ReviewProductLike from './ReviewProductLike.jsx';
import ReviewBoxAll from './ReviewBoxAll.jsx';
import ReviewPage from './ReviewPage.jsx';

export default function Review() {
    const [reviewTab, setReviewTab] = useState([]);   //
    const [reviewData ,setReviewData] = useState([]);  // 
    const [category ,setCategory] = useState('new'); 

    const [ProductLike,setProductLike] = useState([]);

    useEffect(()=>{
        fetch('/data/review.json')
            .then(data => data.json())
            .then(jsonData => {
                setReviewTab(jsonData.reviewTab);
                setProductLike(jsonData.ProductLike);
                if(category === 'new'){
                    setReviewData(jsonData.reviewData);
                } else {
                    const aaa = jsonData.reviewData.filter((item)=>item.category === category  ) ;                      
                    setReviewData(aaa);
                }
                })
            .catch(error => console.log(error));
    },[category]);

    const grandcategory = (category) => {
        setCategory(category)
        // console.log(category);
    }
    const [pageNum, setPageNum] = useState(1); // 페이지 초기값
    const [slicePages, setSlicePages] = useState([]); //페이지 값 관리
    const endPageLength = reviewData.length / 6;   
    const page = 6;                          
    const endPage = (pageNum * page) ;  
    const startPage = (endPage - page) ;

    useEffect(()=>{
        setSlicePages(reviewData.slice(startPage,endPage));
    },[reviewData,pageNum]);  

    return (
        <div className='review-all'>
            <ReviewProductLike 
                reviewData={reviewData} 
                ProductLike={ProductLike}
                
                
                />
            <ReviewBoxAll      
                reviewTab={reviewTab}
                reviewData={reviewData} 
                slicePages={slicePages}
                mama = {grandcategory}/>
            
            <div className='review-next-page'>
                <ReviewPage  pageNum={pageNum}  
                    setPageNum={setPageNum} 
                    endPageLength={endPageLength}/>
            </div>
        </div>
    );
}


