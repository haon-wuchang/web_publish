import React from 'react';

export default function Menu({href,menuName,style,click}) {

    return (
            <a href={href} 
                className={style} 
                onClick={()=>{click(menuName)}}>{menuName}</a>
    );
}

