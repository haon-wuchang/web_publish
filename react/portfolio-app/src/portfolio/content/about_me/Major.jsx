import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Major({icon,iconNm,descript}) {
    return (
                <li className="major">
                <FontAwesomeIcon icon={icon} className='major__icon'/>
                <p className="major__title">{iconNm}</p>
                <p>{descript}</p>
                </li>
    );
}

