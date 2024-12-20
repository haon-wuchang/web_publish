import React from 'react';
import CordingSkillBar from './CordingSkillBar.jsx';

export default function CordingSkill() {
    const cordingBarList = [
        {
            "codeNm" : "HTML",
            "per":"90%",
        },
        {
            "codeNm" : "CSS",
            "per":"90%",
        },
        {
            "codeNm" : "JavaScript",
            "per":"50%",
        },
        {
            "codeNm" : "TypeScript",
            "per":"20%",
        },
        {
            "codeNm" : "React",
            "per":"60%",
        },
        {
            "codeNm" : "NodeJS",
            "per":"60%",
        }
    ];

    return (
        <article className="sklls__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                {cordingBarList.map((item)=>
                    <CordingSkillBar 
                        codeNm={item.codeNm}
                        per={item.per}/>
                )}
            </ul>
        </article>
    );
}

