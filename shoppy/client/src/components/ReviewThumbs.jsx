import React from 'react';
import { GoThumbsup } from "react-icons/go";
import {useState} from 'react';

export default function ReviewThumbs() {
    const [thumbsNum,setThumsNum] = useState(0);
        
    const reviewBoxThumbsUp = () => {
        setThumsNum(thumbsNum+1);
    }
    return (
        <div onClick={reviewBoxThumbsUp}> 
        <span><GoThumbsup /></span>
        <span>{thumbsNum}</span>
    </div>
    );
}

