import React from 'react';
import Hero from '../Hero/hero';
const About = () => {
    return ( 
        <section>
            <Hero />
            <p className="title" id="about-me">About Me</p>
            <p id='bio'>
                <br />
                <br />
                &emsp;I am a Front-End web developer on my way to being a full stack web developer. I am currently leveraging my language teaching background to create clear, clean, intelligible user experiences on the web. Recently earned a certificate in full stack development from the UCONN Coding Boot Camp, with newly developed skills in HTML, JavaScript, CSS, Git, SQL(MySQL), NoSQL(MongoDB), Node, Express, and React -i.e. the MERN stack. 
                <br />
                <br />
                &emsp; I'm currently working on a team to create a full stack app using the MERN stack and applying a few new libraries and tools such as concurrently and Apollo. Attention to detail and commitment to life-long learning have both paid off as new skills are constantly learned and applied; traits that will be invaluable to all future coworkers. 
            </p>
            <p id='quote'>
                &emsp;No one steps into the same river twice ~ Heraclitus of Ephesus (c. 500 BCE)
            </p>
        </section>
     );
}
 
export default About;