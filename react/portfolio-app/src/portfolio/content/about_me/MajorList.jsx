import React from 'react';
import Major from './Major.jsx';
import {faMobile,faServer} from '@fortawesome/free-solid-svg-icons';


export default function MajorList() {
    const iconList = [
        {
        "icon":"faHtml5 ",
        "iconNm":"Front-end",
        "descript":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs"
        },
        {
        "icon":faMobile ,
        "iconNm":"Mobile",
        "descript":"Android Studio, React Native, iOS, Swift, Java, Kotlin"
        },
        {
        "icon":faServer ,
        "iconNm":"Back-end",
        "descript":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot"
        }
        ];
    return (
        <ul className="majors">
            {iconList && iconList.map((item)=>
                <Major icon={item.icon} iconNm={item.iconNm} descript={item.descript}/>
            )}
        </ul>
    );
}

