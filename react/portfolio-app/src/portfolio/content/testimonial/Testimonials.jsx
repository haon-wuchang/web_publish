import React from 'react';

export default function Testimonials({img,text,name,company}) {


    return (
        <li className="testimonial">
            <img className="testimonial__img" src={img} />
            <div className="testimonial__bubble">
                <p>{text}</p>
                <p><a href="#" className="testimonial__bubble__name">{name}</a>{company}</p>
            </div>
      </li>
    );
}

