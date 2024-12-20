import React from 'react';

export default function Job({img,jobNm,period}) {
    return (
        <li className="job">
            <img src={img}/>
            <div>
                <p className="job__name">{jobNm}</p>
                <p className="job__period">{period}</p>
            </div>
        </li>
    );
}


