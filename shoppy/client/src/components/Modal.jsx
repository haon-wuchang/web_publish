import React from 'react';

export default function Modal({isOpen,closeModal,reviewData}) {


    return (
        <div className='modal' style= {{ display: isOpen ? "block":  "none"}}>
            <div className='리뷰이미지 전체'>
                {reviewData.map((item)=>
                    <img src={item.img}/>
                )}
            </div>
            <button onClick={closeModal}>닫기</button>
        </div>
    );
}

