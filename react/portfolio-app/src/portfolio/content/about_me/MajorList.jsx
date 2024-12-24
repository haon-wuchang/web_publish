import React from 'react';
import Major from './Major.jsx';
import { useState,useEffect } from 'react';

export default function MajorList() {
    const [iconList,setIconList]=useState([]);
    useEffect(()=>{
        fetch('json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setIconList(jsonData.iconList))
            .catch(error=>console.log(error));
    },[]);

    return (
        <ul className="majors">
            {iconList && iconList.map((item)=>
                <Major icon={item.icon} iconNm={item.iconNm} descript={item.descript}/>
            )}
        </ul>
    );
}

