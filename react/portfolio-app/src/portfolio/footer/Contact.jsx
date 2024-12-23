import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Contact({href,type}) {
    const contactList = [
        {
            "href":"http://github.com",
            "type":"github"
        },
        {
            "href":"http://linkedin.com",
            "type":"linkedin"
        }
    ];

    return (
        <ul className="contact__links">
            {contactList && contactList.map((item)=>
                <li>
                    <a className="contact__link" href={item.href}>
                        {item.type==='github' && <FontAwesomeIcon icon={faGithub}/>}
                        {item.type==='linkedin' && <FontAwesomeIcon icon={faLinkedin}/>}
                    </a>
                </li>
            )}
        </ul>
    );
}

