import React from 'react';
import BestBookBtn from './BestBookBtn.jsx'
import BestBookContent from './BestBookContent.jsx'
import BestBookImage from './BestBookImage.jsx'

export default function BestBook() {
    return (
        <div>
            <BestBookImage />
            <BestBookContent />
            <BestBookBtn />
        </div>
    );
}

