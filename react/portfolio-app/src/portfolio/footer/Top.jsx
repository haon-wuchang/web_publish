import React from 'react';

export default function Top({title,email}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <p className="description">{email}</p>
        </>
    );
}

