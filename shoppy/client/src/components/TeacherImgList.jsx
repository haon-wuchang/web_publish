import React from 'react';
import { FaPlus } from "react-icons/fa6";
// 쌤꺼

export default function ImageList({imgList, className}) {
    // console.log('name==>> ', className.substring(0,6));
    const name = className.substring(0,6); // 얘는 리뷰이미지인지 구분할라고 사용 ( 이미지저장할때 리뷰-1 이케한듯   name !== 'review' ?그래서 이거 한거임)
    
    return (
        <ul className={className}>
            {   name !== 'review' ?
                    imgList && imgList.map( image => <li><img src={image} alt="" /></li>)
                    :  imgList && imgList.map((image, i) =>                             
                            <li className="review-top-img-metadata">
                                {/* 여기에도 i <7 && 이케하면 이미지8개나오고 */}
                                <img src={image} alt="" />
                                { i === 6 && // i = 이미지 인덱스임 7개면 더보기 나오게 
                                    <>
                                        <p className="review-top-imglist-metadata"></p>
                                        <p className="review-top-imglist-metadata2"><span><FaPlus /></span> <span>더보기</span> </p>
                                    </>    }                                
                            </li>)
            }
        </ul>
    );
}