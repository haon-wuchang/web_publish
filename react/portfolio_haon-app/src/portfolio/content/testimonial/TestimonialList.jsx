import React from 'react';
import Testimonials from './Testimonials.jsx';
import { useState,useEffect } from 'react';

export default function TestimonialList() {
    const [testimonialList,setTestimonialList]=useState([]);
    useEffect(()=>{
        fetch('/json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setTestimonialList(jsonData.testimonialList))
            .catch(error=>console.log(error));
    },[]);
    return (
        <ul class="testimonials">
            {testimonialList && testimonialList.map((item)=>
                <Testimonials 
                    img={item.img}
                    text={item.text}
                    name={item.name}
                    company={item.company}/>
            )}
        </ul>
    );
}

