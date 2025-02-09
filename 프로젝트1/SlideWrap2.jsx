import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CiPlay1 } from "react-icons/ci";
import { BsPause } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function SlideWrap2() {
    const [data,setData] = useState([]);  // 이미지 데이터 
    const [isPlay , setIsPlay] = useState(true); // 슬라이드 재생,멈춤 관리
    const [current, setCurrent] = useState(0);  // 이미지 index 값 
    const length = data.length;  // 이미지 전체 갯수    

    useEffect(() => {
        axios.get('/data/slide.json')
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
    }, 1000); 
    
    return () => clearInterval(interval); 
    }, [current, length,isPlay]);

    // 슬라이드 컨테이너 호버 시 버튼 백그라운드css 생성됨
    const [isHover, setIsHover] = useState(false);

    const handleEnter = () => {
        setIsHover(true);
    }
    const handleLeave = () => {
        setIsHover(false);
    }



    return (
        <>
        <div className='haon-slide-box'
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <SlArrowLeft     onClick={prevSlide}
                className= {isHover === true ? 'slide-leftBtn-hover': 'slide-leftBtn'} />
            {data.map((item,index)=>
            <>
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <img src={item.item1}/>}
                </div>             
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <img src={item.item2}/>}
                </div>             
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <img src={item.item3}/>}
                </div>     
            </>        
            )}
            <SlArrowRight   onClick={nextSlide}
                 className= {isHover === true ? 'slide-rightBtn-hover': 'slide-rightBtn'}  />    
            {isPlay === true ? 
                (<CiPlay1 onClick={handleStop}
                    className= {isHover === true ? 'slide-playBtn-hover': 'slide-playBtn'}/>):
                (<BsPause onClick={handlePlay}
                    className= {isHover === true ? 'slide-stopBtn-hover': 'slide-stopBtn'}/> )                                 
            }      
        </div>
        </>
    );
}

