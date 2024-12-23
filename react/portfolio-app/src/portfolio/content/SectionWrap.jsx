import React from 'react';
import MajorList from './about_me/MajorList.jsx';
import JobList from './about_me/JobList.jsx';

export default function sectionWrap({id,title,description,children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
         <p className="description">{description}</p>
         {children}
         <MajorList />
         <JobList />
        </section>
    );
}

