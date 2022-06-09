import React from 'react';

function Navigation(props) {
    const {} = props;
    return(
        <nav>
        <a href="#about-me">About Me</a>
        <a href="#work">Projects</a>
        <a href="#contact-me">Contact Me</a>
        <a href="./assets/images/TimothyKnightResume2020MainATS-B.pdf" target="blank">Resume</a>
    </nav>
    );
}

export default Navigation;