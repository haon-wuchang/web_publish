import React, { useState } from 'react';
import Modal from './Modal.jsx';


export default function ReviewProductLike({reviewData,ProductLike,sliceImg,imgNum,setImgNum}) {
    const [modalOpen, setModalOpen] = useState(false);  // 리뷰이미지 모달창 테스트 중

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // 리뷰이미지 갯수 관리 8개만 나오게
    const [reviewImg, setReviewImg] = useState();

    // reviewData를 맵돌려서 length 가 8보다 작은애들만 이미지 나오게 
    const leng = reviewData.length;
    // if( leng < 9){           
    //     맵돌려서 이미지 잇을때만 출력 
    // }   





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
            
            {/* <div> 
                <button onClick={openModal}>더보기</button>
                <Modal isOpen={modalOpen} closeModal={closeModal} reviewData={reviewData}/> */}
            {/* </div> 모달테스트 끗 */}
            {sliceImg && sliceImg.map((item)=>
                {return item.img && <img src={item.img} alt="리뷰전체이미지" />} 
            // 얘가 이미지 없는 애들까지 갯수로쳐서 8개 안나오고 5개만 나옴;;
            )}   
                    
        </div>
    </div>     
    );
}

