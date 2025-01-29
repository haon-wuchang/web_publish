import React, { useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa";

export default function ReviewThumbs() {
    const [thumbsNum, setThumbsNum] = useState(0);
    const handleThumbs = () => {
        setThumbsNum(thumbsNum+1);
    }
    return (
        <button className='review-five-line-rightbtn'
            onClick={handleThumbs}>
            <FaRegThumbsUp />
            <span>{thumbsNum}</span>
        </button>
    );
}

