import React from 'react';

export default function Detail({imgList}) {
    return (
        <div className='detail-box'>
            <img src="https://image.wconcept.co.kr/images/Upload/VendorClosedBanner/20250117103402_3005374.jpg" alt="" />
            {imgList.map((img)=> 
                <img src={img}/>
            )}
        </div>
    );
}

