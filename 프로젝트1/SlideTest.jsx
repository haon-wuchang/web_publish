import React, { useEffect, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
import { BsPause } from "react-icons/bs";

export default function SlideTest() {

    const [data,setData] = useState([]);  // 이미지 데이터 
    const [isPlay , setIsPlay] = useState(true); // 슬라이드 재생,멈춤 관리

    const [current, setCurrent] = useState(0);  // 이미지 index 값 

    const length = data.length;  // 이미지 전체 갯수 3
    console.log('길이이잉==========',length);
    

    useEffect(() => {
        axios.get('/data/haon.json')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error));
    }, []);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
      const handlePlay = () => {
        setIsPlay(true);
    }
    const handleStop = () => {
        setIsPlay(false);
    }


      useEffect(() => {
        const interval = setInterval(() => {
            if(isPlay === true){
                nextSlide();
            }else{
                handleStop();
            }
        }, 5000); 
        
        return () => clearInterval(interval); 
      }, [current, length,isPlay]);
    

    return (<>
              <div className='haon-slide-box'>
                  <FaArrowAltCircleLeft className='slide-leftBtn' onClick={prevSlide}/>
                  {data.map((item,index)=>
                  <>
                      <div className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {index === current && <img src={item.item1} className='image' />}
                      </div>             
                      <div className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {index === current && <img src={item.item2} className='image' />}
                      </div>             
                      <div className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {index === current && <img src={item.item3} className='image' />}
                      </div>     
                  </>        
                  )}
                  <FaArrowAltCircleRight className='slide-rightBtn' onClick={nextSlide} />    
                  {isPlay === true ? 
                      (<CiPlay1 className='slide-playBtn' onClick={handleStop}/>):
                      (<BsPause className='slide-stopBtn' onClick={handlePlay}/> )                                 
                  }      
              </div>
              </>
    );
}

// 멈춤.시작 버튼 ( 멈춤누르면 시작버튼 나오고 시작버튼누르면 멈춤버튼 나와야함)

