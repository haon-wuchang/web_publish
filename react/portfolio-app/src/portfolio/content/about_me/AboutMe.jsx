import React from 'react';
import MajorList from "./MajorList.jsx";
import JobList from './JobList.jsx';

export default function AboutMe() {

    return (
        <section id="about" class="section max-container">
            <MajorList />
            <JobList />
       </section> 
    );
}

