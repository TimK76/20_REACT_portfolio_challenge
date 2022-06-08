import React from 'react';
const Contact = () => {
    return ( 
        <section id="contact">
            <aside className="title" id="contact-me">
            Contact Me
            </aside>
            <div id="contact-me-container">
                <article className="contact-me">
                    (267) 234-3403
                </article>
                <article className="contact-me" >
                    <a href="mailto:haadelphos2001@gmail.com" id="email">haadelphos2001@gmail.com</a>
                </article>
                <article className="contact-me">  
                    <a href="https://github.com/TimK76" target="blank">Github</a>
                </article>
                <article className="contact-me"> 
                    <a href="https://www.linkedin.com/in/timothy-knightmoore/" target="blank">LinkedIn</a>
                </article>
            </div>         
        </section>
     );
}
 
export default Contact;