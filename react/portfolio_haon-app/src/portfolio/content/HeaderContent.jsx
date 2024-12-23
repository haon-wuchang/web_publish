import React from 'react';

export default function HeaderContent() {
    return (
        <section id="home">
            <img className="home__avatar" src="/images/trustping.png" alt="portfolio" />
            <h2 className="home__title">Hello <br/> I'm
            <strong className="home__title--strong">Dream Coder</strong>, HAON</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
    );
}

