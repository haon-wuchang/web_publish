import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';

export default function ProjectList() {
    const projectList =[
        {
            "img":"images/projects/project1.webp",
            "title":"Project #1",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project2.webp",
            "title":"Project #2",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project3.webp",
            "title":"Project #3",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project4.webp",
            "title":"Project #4",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project5.webp",
            "title":"Project #5",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project6.webp",
            "title":"Project #6",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project7.webp",
            "title":"Project #7",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project8.webp",
            "title":"Project #8",
            "etc":"Clone Coding with HTML, CSS"
        }
    ]

    return (
        <ul className="projects">
            {projectList && projectList.map((item)=>
                <li className="project">
                    <Project 
                        img={item.img}
                        title={item.title}
                        etc={item.etc}
                        />
                </li>
            )}
        </ul>
    );
}

