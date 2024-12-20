import React from 'react';
import Title from '../Title.jsx';
import CategoryList from './CategoryList.jsx';
import ProjectList from './ProjectList.jsx';

export default function MyWork() {
    const titleList = {
        "title" : "My work",
        "description" : "Projects",
        "skillsDescription" : false
        }
    return (
        <section id="work" className="section max-container">    
            <Title list={titleList}/>
            <CategoryList />
            <ProjectList />
        </section>
    );
}

