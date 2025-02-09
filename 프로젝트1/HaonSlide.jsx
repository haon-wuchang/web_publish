import React, { useEffect, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
import { BsPause } from "react-icons/bs";

export default function HaonSlide() {
    const [data,setData] = useState([]);  // 이미지 데이터 
    const [isPlay , setIsPlay] = useState(true); // 슬라이드 재생,멈춤 관리

    const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
    const itemsPerPage = 1; // Num = 한 페이지에 보여줄 데이터 갯수
    const totalItem = data.length; // 데이터 총 갯수    
    const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
    const currentPage = 1;
    const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
    // 리스트 slice 범위
    const endIdx = (page * itemsPerPage); // 반드시 endIdx가 startIdx보다 먼저 선언되어야 함
    const startIdx = endIdx - itemsPerPage;

    useEffect(() => {
        axios.get('/data/haon.json')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        setSliceData(data.slice(startIdx, endIdx));
    }, [page, data]);


    const handlePrev = () => {
        if (page > 1) {
            setPage(page-1);
        } else if(page === 1){
            setPage(totalPages)
        }
    }

    const handleNext = () => {
        if(page < totalPages){
            setPage(page+1)
        } else if(page === totalPages){
            setPage(1);
        }
    }
    const handlePlay = () => {
        setIsPlay(true);
    }
    const handleStop = () => {
        setIsPlay(false);
    }


    return (
        <>
        <div className='haon-slide-box'>
            <FaArrowAltCircleLeft className='slide-leftBtn' onClick={handlePrev}/>
            {sliceData.map((item)=>
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
            <FaArrowAltCircleRight className='slide-rightBtn' onClick={handleNext} />    
            {isPlay === true ? 
                (<CiPlay1 className='slide-playBtn' onClick={handleStop}/>):
                (<BsPause className='slide-stopBtn' onClick={handlePlay}/> )                                 
            }      
        </div>
        </>
    );
}

