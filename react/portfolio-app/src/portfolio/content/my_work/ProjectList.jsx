import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';

export default function ProjectList() {
    const [projectList,setProjectList] = useState([]);
    useEffect(()=>{
        fetch('/json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=> setProjectList(jsonData))                
            .catch(error=>console.log(error));
    },[]);

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

