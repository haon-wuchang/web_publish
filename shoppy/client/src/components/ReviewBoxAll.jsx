import React from 'react';
import ReviewBox from './ReviewBox.jsx';


export default function ReviewBoxAll() {
    return (
        <div>
            <ul className='review-tap'>
                <li>최신순</li>
                <li>평점 높은순</li>
                <li>평점 낮은순</li>
                <li>추천순</li>
            </ul>
            <ReviewBox />
        </div>
    );
}

