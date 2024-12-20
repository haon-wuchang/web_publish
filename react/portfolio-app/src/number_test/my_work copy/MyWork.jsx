import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList.jsx';
import ProjectList from './ProjectList.jsx';
import './style.css';

export default function MyWork() {
    const [type,setType] = useState('all');
    const [categoryList, setCategoryList] = useState([]);
    const [projectList,setProjectList] = useState([]);
    
    useEffect(()=>{
        fetch('/json_data/project_copy.json')
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
    

    return (
        <section id="work" className="section max-container">    
            <CategoryList 
                handleGrand={handlecateList}
                categoryList={categoryList}/>
            <ProjectList projectList={projectList}/>
        </section>
    );
}

