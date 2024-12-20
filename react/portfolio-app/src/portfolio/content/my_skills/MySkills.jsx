import React from 'react';
import Title from '../Title.jsx';
import CordingSkill from './CordingSkill.jsx';
import Tool from './Tool.jsx';
import Etc from'./Etc.jsx';

export default function MySkills() {
    const titleList = {
        "title" : "My Skills",
        "description" : "Skills & Attributes",
        "skillsDescription" : true
        }
    return (
        <section id="skill" className="section max-container">
            <Title list={titleList}/>
            <div className="skills">
                <CordingSkill />
                <Tool />
                <Etc />
            </div>
        </section>
    );
}

