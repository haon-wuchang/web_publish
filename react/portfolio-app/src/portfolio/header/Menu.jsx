import React from 'react';

export default function Menu({href,classNm,menuName}) {
    return (
        <a href={href} className={classNm}>{menuName}</a>
    );
}

