import React from 'react';
import Category from './Category.jsx';

export default function CategoryList() {
    const categoryList = [
        {
            "btnClass":"category category--selected",
            "name":"All",
            "spanClass":"category__count",
            "number":"8"
        },
        {
            "btnClass":"category",
            "name":"Front-end",
            "spanClass":"category__count",
            "number":"4"
        },
        {
            "btnClass":"category",
            "name":"Back-end",
            "spanClass":"category__count",
            "number":"2"
        },
        {
            "btnClass":"category",
            "name":"Mobile",
            "spanClass":"category__count",
            "number":"2"
        }
    ];
    return (
        <ul class="categories">  
            {categoryList.map((item)=>
                <Category 
                    btnClass={item.btnClass}
                    name={item.name}
                    spanClass={item.spanClass}
                    number={item.number}/>
            
            )}  
        </ul>
    );
}

