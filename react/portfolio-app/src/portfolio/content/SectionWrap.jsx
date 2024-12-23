import React from 'react';

export default function sectionWrap({id,title,description,children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
            {id==='skill' ? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
            eveniet cupiditate optio natus? Cum, harum eum sint id quod 
            nulla adipisci. Sunt?</p>: <p className="description">{description}</p>}
         {children}
        </section>
    );
}

