import React from 'react';

export default function TestImg({reviewBottomList,item,index,count}) {

    for(let i = 0; i < reviewBottomList.length; i++) {
        reviewBottomList.map((item)=>{
            if(item.img === null )  {
                reviewBottomList.splice(i, 1);
              i--;
            }         
        })
    }    

    return (
        <>
           {index < 8+count && item.img && <img src={item.img}/>}
           <span>더보기</span>
        
        </>
    );
}
