import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';

export default function ProjectList({projectList}) {


    return (
        <ul className="projects">
            {projectList.map((item)=>
                <Project 
                    img={item.img}
                    num={item.num}
                    etc={item.etc}
                    type={item.type}/>
            )}
        </ul>
    );
}

