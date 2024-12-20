import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer id="contact" className="section">
            <h2 className="title">Let's talk</h2>
            <p className="description">jeon.developer.HAON@gmail.com</p>
            <ul className="contact__links">
                <li>
                    <a className="contact__link" href="http://github.com">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a className="contact__link" href="http://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p>Dream Software Engineer HAON - All right reserved</p>
      </footer>
    );
}

// 폰트어썸 아이콘 적용 안되는뎅?