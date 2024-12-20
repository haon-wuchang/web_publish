import React from 'react';
import Testimonials from './Testimonials.jsx';

export default function TestimonialList() {
    const testimonialList = [
        {
            "img":"images/testimonials/people1.webp",
            "text":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"James Kim",
            "company":" / Samsung"
        },
        {
            "img":"images/testimonials/people2.webp",
            "text":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"Smith Park",
            "company":" / Samsung"
        },
        {
            "img":"images/testimonials/people3.webp",
            "text":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"Anna Jin",
            "company":" / Google"
        }
    ];
    return (
        <ul class="testimonials">
            {testimonialList.map((item)=>
                <Testimonials 
                    img={item.img}
                    text={item.text}
                    name={item.name}
                    company={item.company}/>
            )}
        </ul>
    );
}

