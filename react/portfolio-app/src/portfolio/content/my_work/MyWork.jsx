import React, { useEffect, useState } from 'react';
import Title from '../Title.jsx';
import CategoryList from './CategoryList.jsx';
import ProjectList from './ProjectList.jsx';

export default function MyWork() {
    const [type,setType] = useState('all');
    const [categoryList, setCategoryList] = useState([]);
    const [projectList,setProjectList] = useState([]);
    
    useEffect(()=>{
        fetch('/json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=> {
                setCategoryList(jsonData.categoryList);
                if(type==='all'){
                    setProjectList(jsonData.projectList)}
                else{
                    const filterArray = jsonData.projectList.filter((item)=>
                        item.type===type );
                        setProjectList(filterArray);
                }
            })    
            .catch(error=>console.log(error));
    },[type])

    const handlecateList = (type) => {
        setType(type);
    }
    const tet = projectList.filter((t)=>t.type==='front').length;
    const tet2 = projectList.filter((t)=>t.type==='back').length;
    const tet3 = projectList.filter((t)=>t.type==='mobile').length;  
    let total = tet+tet2+tet3;

    const titleList = {
        "title" : "My work",
        "description" : "Projects",
        "skillsDescription" : false
        }
    return (
        <section id="work" className="section max-container">    
            <Title list={titleList}/>
            <CategoryList 
                handleGrand={handlecateList}
                categoryList={categoryList}
                test={total}/>
            <ProjectList projectList={projectList}/>
        </section>
    );
}

