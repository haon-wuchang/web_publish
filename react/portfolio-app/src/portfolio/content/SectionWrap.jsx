import React from 'react';

export default function sectionWrap({id,title,description,children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
         <p className="description">{description}</p>
         {children}
        </section>
    );
}

