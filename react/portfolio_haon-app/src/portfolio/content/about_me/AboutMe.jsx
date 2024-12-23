import React from 'react';
import MajorList from "./MajorList.jsx";
import Title from '../Title.jsx';
import JobList from './JobList.jsx';

export default function AboutMe() {
    const titleList = {
        "title" : "About me",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla a",
        "skillsDescription" : false
        }

    return (
        <section id="about" class="section max-container">
            <Title list={titleList}/>
            <MajorList />
            <JobList />
       
       </section> 
    );
}

