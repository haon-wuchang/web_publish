import React from 'react';

export default function Title({id,classNameNm,title,description,skillsDescription}) {

    return (
    <section id={id} className={classNameNm}>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        {skillsDescription && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nobis beatae, aliquid ratione commodi nam ex voluptate rem
        eveniet cupiditate optio natus? Cum, harum eum sint id quod
        nulla adipisci. Sunt?</p>}
    </section>
    );
}

