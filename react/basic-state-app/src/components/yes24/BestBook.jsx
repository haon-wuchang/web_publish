import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook() {


    return (
        <div className='div'>
            <BestBookAvatar 
                rank={1} 
                img={'https://image.yes24.com/goods/13137546/L'}/>
            <BestBookContent 
                suggest = {true}
                today = {true}
                type = '도서'
                title = '소년이 온다'
                author = '한강 저'
                company = '창비'
                pubDate = '2014년 5월'
                price = '13,500원'
                perSale = '10'
                point = '750'
            />
            <BestBookButton />
        </div>
        
    );
}


