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
        // console.log(type);
    }
    
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
                categoryList={categoryList}/>
            <ProjectList projectList={projectList}/>
        </section>
    );
}

