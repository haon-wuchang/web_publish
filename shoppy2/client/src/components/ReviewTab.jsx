import React from 'react';

export default function ReviewTab({tabNm,category,momCategory}) {
    const handleCategory = () => {
        momCategory(category);
        // console.log(category);
    }
    

    return (
            <li onClick={handleCategory}>{tabNm}</li>  
    );
}

