import React from 'react';
import Category from './Category.jsx';

export default function CategoryList({handleGrand,categoryList,test}) {
  
    const handleCategory = (type) => {
        handleGrand(type);
        // console.log(type);       
    }

    return (
        <ul className="categories">  
            {categoryList && categoryList.map((item)=>
                <Category 
                    btnClass={item.btnClass}
                    name={item.name}
                    spanClass={item.spanClass}
                    number={item.number}
                    type={item.type}
                    tests={test}
                    handleMom={handleCategory}/>            
            )}  
        </ul>
    );
}

