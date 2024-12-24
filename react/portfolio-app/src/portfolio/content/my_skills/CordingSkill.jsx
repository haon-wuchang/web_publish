import React from 'react';
import CordingSkillBar from './CordingSkillBar.jsx';
import { useEffect,useState } from 'react';

export default function CordingSkill() {
    const [cordingBarList,setCordingBarList]=useState([]);
    useEffect(()=>{
        fetch('json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setCordingBarList(jsonData.cordingBarList))
            .catch(error=>console.log(error));
    },[]);

    return (
        <article className="sklls__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                {cordingBarList && cordingBarList.map((item)=>
                    <CordingSkillBar 
                        codeNm={item.codeNm}
                        per={item.per} 
                        />
                )}
            </ul>
        </article>
    );
}

