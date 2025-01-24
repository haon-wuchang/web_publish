import React from 'react';
import TestImg from './TestImg.jsx';

export default function Test({reviewBottomList,item,count,index}) {

    return (
            <li className='review-customer-imgs'>
              <TestImg item={item} index ={index}reviewBottomList={reviewBottomList} count={count}/>
            </li>
        
    );
}

