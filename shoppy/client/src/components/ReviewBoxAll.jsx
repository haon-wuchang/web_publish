import React from 'react';
import ReviewBoxDetail from './ReviewBoxDetail';
import ReviewTab from './ReviewTab.jsx';

export default function ReviewBoxAll({reviewTab,slicePages,mama}) {
    const momCategory = (category) => {
        // console.log(category);
        mama(category);
        
    }

    return (
            <div>
                <ul className='review-tap'>
                    {reviewTab && reviewTab.map((item)=>
                        <ReviewTab momcate={momCategory} tabNm={item.tabNm} category ={item.category}/>  
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

