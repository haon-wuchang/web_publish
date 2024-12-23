import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';

export default function ProjectList() {
    const projectList =[
        {
            "type":"front",
            "img":"images/projects/project1.webp",
            "num":"Project #1",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"front",
            "img":"images/projects/project2.webp",
            "num":"Project #2",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"front",
            "img":"images/projects/project3.webp",
            "num":"Project #3",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"front",
            "img":"images/projects/project4.webp",
            "num":"Project #4",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"back",
            "img":"images/projects/project5.webp",
            "num":"Project #5",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"back",
            "img":"images/projects/project6.webp",
            "num":"Project #6",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"mobile",
            "img":"images/projects/project7.webp",
            "num":"Project #7",
            "etc":"Clone Coding with HTML, CSS"
        },
        {
            "type":"mobile",
            "img":"images/projects/project8.webp",
            "num":"Project #8",
            "etc":"Clone Coding with HTML, CSS"
        }
    ]


    return (
        <ul className="projects">
            {projectList.map((item)=>
                <li className="project">
                    <Project 
                        img={item.img}
                        num={item.num}
                        etc={item.etc}
                        type={item.type}
                        number={item.number}/>
                </li>
            )}
        </ul>
    );
}

