import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function HeaderBtn() {
    return (
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
            <FontAwesomeIcon icon={faBars} />
      </button>
    );
}

