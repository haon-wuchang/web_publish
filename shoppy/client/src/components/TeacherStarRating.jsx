import React, { useState } from "react";
import { TbStarFilled } from "react-icons/tb";

export default function StarRating({ totalRate, className }) {
    {/*별들 디자인이 다 다르니깨 className 가져오는거임 */}
  return (
    <div className="star-rating">
        {/**...Array(totalRate) => 는 스프레드 썻으니꺠 별5가 5번 돈다는거임 별3이면 3번만돌고 */}
      {[...Array(totalRate)].map((_) => (
        <span className={className}>
          <TbStarFilled />
        </span>
      ))}
      {/**저 위에꺼 삼항으로 className 따로따로줘서 별5개는 ㅣㅂ기본으로나오고 내가정한 별점만 css로 색다르게 해도댕 */}
      { className === "star-black-big"  && 
        <>
          <span className={className.concat(" number")}>{totalRate} /</span>
          <span className={className.concat(" tot-number")}>{totalRate}.0</span>
        </>
      }      
      { className === "star-coral"  && 
        <>
          <span className={className.concat(" number")}>{totalRate}</span>
        </>
      }      
    </div>
  );
}