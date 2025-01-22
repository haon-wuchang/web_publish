import React from 'react';
import ReviewBoxDetail from './ReviewBoxDetail';

export default function ReviewBoxAll({reviewTap,reviewData,slicePages}) {


    return (
            <div>
                <ul className='review-tap'>
                    {reviewTap && reviewTap.map((item)=>
                        <li>{item.tapNm}</li>                    
                    )}
                </ul>
                <div className='review-box'>                                                     
                    <table>
                        <colgroup>
                            <col style={{"width": "160px"}}></col>
                            <col style={{"width": "auto"}}></col>
                        </colgroup>
                            {slicePages&& slicePages.map((item)=>
                                <ReviewBoxDetail item={item} />                            
                            )}
                    </table>     
                </div>
            </div>
    );
}

