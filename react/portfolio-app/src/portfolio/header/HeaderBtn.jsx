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

//이거 버튼 눌렀을때 메뉴 뜨게 만들어야댕 onClick 이벤트해서 만들어야할듯