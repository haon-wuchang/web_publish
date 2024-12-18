import React from 'react';

export default function Menu({menu_title}) {
    const handleClick = () => {
        console.log('a');
        
    }
    return (       
            <ul>
                <li className='a' onClick={handleClick}>{menu_title}</li>
            </ul>
    );
}

