import React from 'react';

export default function Title({list}) {

    return (
    <>
        <h2 className="title">{list.title}</h2>
        <p className="description">{list.description}</p>
        {list.skillsDescription && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nobis beatae, aliquid ratione commodi nam ex voluptate rem
        eveniet cupiditate optio natus? Cum, harum eum sint id quod
        nulla adipisci. Sunt?</p>}
    </>
    );
}

// title 을 어떻게 컴포넌트로 만들어서 써야될지를 모르겟댱 