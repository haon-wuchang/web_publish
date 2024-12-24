import React, { useEffect, useState } from 'react';
import Category from './Category.jsx';

export default function CategoryList() {
    const [selected,setSlected] = useState('All');
    const [categoryList,setCategotyList] = useState([]);

    useEffect(()=>{
        fetch('json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setCategotyList(jsonData.categoryList)
            )
            .catch(error=>console.log(error))
    },[])


    const handleClick = (name) => {
        setSlected(name);
    }

    


    return (
        <ul className="categories">  
            {categoryList && categoryList.map((item)=>
                <Category 
                    name={item.name}
                    count={item.count}
                    click={handleClick}
                    style={item.name===selected?
                        'category category--selected':
                        'category'}
               />            
            )}  
        </ul>
    );
}

