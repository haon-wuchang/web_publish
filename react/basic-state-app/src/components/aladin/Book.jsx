import React from 'react';

export default function Book({img,title}) {
    return (
        <div className='div'>
            <img src={img}/>
            <div>{title}</div>

        </div>
    );
}


