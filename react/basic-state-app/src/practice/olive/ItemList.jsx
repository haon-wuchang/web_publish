import React from 'react';
import Item from './Item.jsx';
export default function ItemList({itemList}) {
    
    return (
        <div>
            {itemList && itemList.map((item)=>
                <Item 
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    isSale={item.isSale}
                    isToday={item.isToday}
                    isCoupon={item.isCoupon}/>
            )}
        </div>
    );
}

