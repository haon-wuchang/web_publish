import React from 'react';

export default function ToolEtc({articleNm,type}) {

    const data = {
        "tools":[
            "Visual Studio Code","IntelliJ","Android Studio Code","iOS development tools","Eclipse"
        ],
        "etc":[
            "Git","Scrum Master","SVN"
        ]
    }

    return (
        <article className={articleNm}>
            <h3 className="skill__title">{type}</h3>
            <ul>
                {type==='Tools' ? 
                    data.tools.map(item=> 
                        <li>{item}</li> ): 
                    data.etc.map(item=> 
                        <li>{item}</li> )}
                
            </ul>
        </article>
    );
}

//여기 클래스도 나눠줘야 css 적용되는데이ㅣㅣㅣ ㅜㅜㅡㅡ