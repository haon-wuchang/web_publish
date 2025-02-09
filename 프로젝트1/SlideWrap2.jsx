import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CiPlay1 } from "react-icons/ci";
import { BsPause } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import useInterval from './useInterval.jsx';

// 슬라이드 넘어가는css  작업 해야함
// json 에 
// "item1,2,3Br":[
//     "1br-2","1br-2","2br-1","2br-2","3br-1","3br-2"
//  ]  
// itemBr[2] 의 데이터가 한줄인 애들 위치 를 좀 고쳐야함

export default function SlideWrap2() {
    const [data,setData] = useState([]);  //  데이터 관리값
    const [isPlay , setIsPlay] = useState(true); // 슬라이드 재생,멈춤 관리
    const [current, setCurrent] = useState(0);  // 데이터의 index 값 
    const length = data.length;  // 이미지 전체 갯수       


    useEffect(() => {
        axios.get('/data/slide.json')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error));
    }, []);

    useInterval(() => {  
        if(isPlay === true){
            nextSlide();
        }else{
            handleStop();
        }
      }, 1000);

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
            <SlArrowLeft onClick={prevSlide}
                className= {isHover === true ? 'slide-leftBtn-hover': 'slide-leftBtn'} />
            {data.map((item,index)=> 
            <>
                <div className={index === current ? 'slide active' : 'slide'}>
                    {index === current && <p className='slide-title'>
                        {item.item1Msg[0]}<br/>{item.item1Br[0]}</p>}                    
                    {index === current && <p 
                        className='slide-desc1'>
                        {item.item1Msg[1]}<br/>{item.item1Br[2]}</p>}
                    {index === current && <p className='slide-desc2'>
                        {item.item1Msg[2]}<br/>{item.item1Br[4]}</p>}
                    {index === current && <img src={item.item1}/>}
                    {/* index===current 이거 비교값을 지우면 이미지 안넘어가는데? */}
                </div>             
                <div className={index === current ? 'slide active' : 'slide' } >
                    {index === current && <p className='slide-title'>
                        {item.item2Msg[0]}<br/>{item.item2Br[0]}</p>}
                    {index === current && <p className='slide-desc1'>
                        {item.item2Msg[1]}<br/>{item.item2Br[2]}</p>}
                    {index === current && <p className='slide-desc2'>
                        {item.item2Msg[2]}<br/>{item.item2Br[4]}</p>}
                    {index === current && <img src={item.item2}/>}
                </div>             
                <div className={index === current ? 'slide active' : 'slide'} >
                    {index === current && <p className='slide-title'>
                        {item.item3Msg[0]}<br/>{item.item3Br[0]}</p>}
                    {index === current && <p className='slide-desc1'>
                        {item.item3Msg[1]}<br/>{item.item3Br[2]}</p>}
                    {index === current && <p className='slide-desc2'>
                        {item.item3Msg[2]}<br/>{item.item3Br[4]}</p>}
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

