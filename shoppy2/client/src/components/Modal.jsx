import React from 'react';

export default function Modal({isOpen,closeModal,reviewBottomList}) {


    return (
        <div className='modal' style= {{ display: isOpen ? "block":  "none"}}>
            <div className='tt'>
                {reviewBottomList && reviewBottomList.map((item)=>
                    <img src={item.img}/>
                )}
                <h3>asdfsafsaf</h3>
            </div>
            <button onClick={closeModal} className='aa'>닫기</button>
        </div>
    );
}

