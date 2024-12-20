import React from 'react';

export default function Menu({name,category,hand1}) {
    const handleClick = () => {
        hand1(category);
    }

    return (
            <li onClick={handleClick}>{name}</li>
    );
}

