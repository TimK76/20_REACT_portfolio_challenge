import React from 'react';
import Resume from '../../assets/TimothyKnightResume2020MainATS-B.pdf';

function Navigation({setCurrentPage}) {
    console.log("In Navigation ", setCurrentPage)

    return(
        <nav>
        <a href="#About" onClick={()=>setCurrentPage("About")}>About Me</a>
        <a href="#Project" onClick={()=>setCurrentPage("Project")}>Projects</a>
        <a href="#Contact" onClick={()=>setCurrentPage("Contact")}>Contact Me</a>
        <a href={Resume} target="blank">Resume</a>
    </nav>
    );
}

export default Navigation;