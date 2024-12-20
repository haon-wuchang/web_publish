import React from 'react';
import Title from '../Title.jsx';
import TestimonialList from './TestimonialList.jsx';

export default function Testimonial() {
    const titleList = {
        "title" : "Testimonial",
        "description" : "See what they say about me",
        "skillsDescription" : false
        }
    return (
        <section id="testimonial" className="section max-container">
            <Title list={titleList}/>
            <TestimonialList />
        </section>
    );
}

