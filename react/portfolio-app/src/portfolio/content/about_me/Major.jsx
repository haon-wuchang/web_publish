import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobile,faServer} from '@fortawesome/free-solid-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';

export default function Major({icon,iconNm,descript}) {
    return (
        <>
            <li className="major">
            {icon === 'html' && <FontAwesomeIcon icon={faHtml5} className='major__icon'/>}
            {icon === 'server' && <FontAwesomeIcon icon={faServer} className='major__icon'/>}
            {icon === 'mobile' && <FontAwesomeIcon icon={faMobile} className='major__icon'/>}
            <p className="major__title">{iconNm}</p>
            <p>{descript}</p>
            </li>
        </>
    );
}

