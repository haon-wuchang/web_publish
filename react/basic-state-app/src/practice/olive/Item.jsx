import React from 'react';

export default function Item({img,title,price,isSale,isCoupon,IsToday}) {
    return (
        <div>
            <img src={img} style={{'width':'150px', 'height':'150px'}}/>
            <p>{title}</p>
            <p>{price}</p>
            {isCoupon && <p>쿠폰</p>}
            {IsToday&&<p>오늘드림</p>}
            {isSale&& <p>세일</p>}
        </div>
    );
}

