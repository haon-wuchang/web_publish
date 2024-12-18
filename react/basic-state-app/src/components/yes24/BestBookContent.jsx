import React from 'react';

export default function BestBookContent(props) {
    return (
        <div className='container-content'>
            <div>
                {props.suggest && <span>강력추천</span>}
                {props.today && <span>오늘의책</span>}
                {/* {props.novel && <span>2024노벨문학상 수상작가</span>} */}
            </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
                {/* <span>[{props.novelWriter}]</span> */}
            </div>
            <div>
                <span>{props.author}</span>
                <span>{props.company}</span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}</span>
                <span>({props.perSale}% 할인)</span>
                <span>p {props.point}원</span>
            </div>
        </div>
    );
}

