import React from 'react';
import MajorList from "./MajorList.jsx";
import Title from '../Title.jsx';

export default function AboutMe() {
    const titleList =[
        {
        "id":"about",
        "classNm":"section max-container",
        "title":"About me",
        "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla a",
        "skillsDescription":false
        }
    ]
    return (
       <>
            {titleList.map((item)=>
                    <Title id={item.id} classNm={item.classNm}
                    title={item.title} description={item.description}
                    skillsDescription={item.skillsDescription}/>
            )}
            <MajorList />
       
       </> 
    );
}

