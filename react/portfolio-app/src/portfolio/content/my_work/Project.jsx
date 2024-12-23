import React from 'react';

export default function Project({img,title,etc}) {

    return (
        <>
        <img className="project__img" src={img} />
        <div className="project__metadata">
            <h3 className="project__metadata__title">{title}</h3>
            <p>{etc}</p>
        </div>
        </>
    );
}

