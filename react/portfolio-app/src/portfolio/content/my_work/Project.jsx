import React from 'react';

export default function Project({img,num,etc,type}) {

    return (
        <li className="project">
        <img className="project__img" src={img} />
        <div className="project__metadata">
            <h3 className="project__metadata__title">{num}</h3>
            <p>{etc}</p>
        </div>
        </li>
    );
}

