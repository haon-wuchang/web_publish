import React from 'react';

export default function ReviewTab({tabNm,category,momcate}) {
    const handleCategory = () => {
        momcate(category);     
        // console.log(category);
           
    }

    return (
            <li onClick={handleCategory}>{tabNm}</li>
    );
}

