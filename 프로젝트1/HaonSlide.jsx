import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function HaonSlide() {
    const imgList = [
       { 
        item1:"https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_409446_3_KOR_20250124110403.jpg",
        item2:  "https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_409446_8_KOR_20250124110539.jpg",
        item3: "https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_345836_169_KOR_20250124110245.jpg",
        },
        {
        item1:"https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_345840_158_KOR_20250124110759.jpg",
        item2:"https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_345840_150_KOR_20250124110846.jpg",
        item3:"https://img.ssfshop.com/display/category/THM/A30/A16/contents/23357_345840_151_KOR_20250124111056.jpg"
        }   
    ];
// 이;거 버튼 눌러서 넘어가는거 쇼피 페이지네이션 참고하삼 밥먹고 피곤떄
    return (
        <div className='haon-slide-box'>
            <FaArrowAltCircleLeft className='slide-leftBtn'/>
            {imgList.map((item)=>
            <>
                <div>
                    <img src={item.item1}/>
                </div>             
                <div>
                    <img src={item.item3}/>
                </div>             
                <div>
                    <img src={item.item2}/>
                </div>     
            </>        
            )}
            <FaArrowAltCircleRight className='slide-rightBtn' />          
            <CiPlay1 className='slide-stopBtn'/>        
        </div>
    );
}

