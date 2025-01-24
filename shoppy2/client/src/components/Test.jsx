import React from 'react';
// import Modal from './Modal.jsx';
// import { useState } from 'react';

export default function Test({reviewBottomList,count}) {


    
    
    for(let i = 0; i < reviewBottomList.length; i++) {
        reviewBottomList.map((item)=>{
            if(item.img === null )  {
                reviewBottomList.splice(i, 1);
                i--;
            }         
        })
    }        
        // splice(삭제할인덱스번호, 몇개삭제할건지)  => 삭제하고 새 배열 만듬
        // 이미지 없는애들 잘라서 새로 배열만듬 그걸로 맵돌려서 이미지 출력 
        // 이미지 8개만 출력하니까 총10개인데 나머지 2개는 출력이 안되는데 화면에 
        //자리차지해서 얘네도 삭제해야되는데 어케함

    return (
        <>
            {reviewBottomList && reviewBottomList.map((item,index)=>                    
                <li className='review-customer-imgs'>
                    {/* {index < 8+count && item.img && <img src={item.img} />} */}
                    {index < 8 && item.img && <img src={item.img} />}
                    <span>더보기</span>
                </li>
            )}
        
        </>
    );
}

