import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Major({icon,iconNm,descript}) {
    return (
        <>
            <ul className="majors">
                <li className="major">
                <FontAwesomeIcon icon={icon} />
                <p className="major__title">{iconNm}</p>
                <p>{descript}</p>
                </li>
            </ul>
        </>
    );
}

