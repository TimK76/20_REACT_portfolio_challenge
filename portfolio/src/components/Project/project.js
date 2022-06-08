import React from 'react';

function Project() {
    return(
        <section>
            <aside className="title" id="work">Projects</aside>
            <article className="work-examples">
                <figure>
                    <img id="big" src="./assets/images/MVP001_main.jpeg" alt="Picture of landing page for Jamming-Blog application"/>
                    <a href="https://github.com/samw281/jamming-blog" target="blank">
                        <div>                         
                        <h3>Jamming Blog</h3>
                        <h4>Express/MySQL/Sequelize</h4>   
                        </div>
                    </a>
                </figure>
                <figure className="small">
                    <img src="./assets/images/nutrition_helper-004.jpg" alt="Picture of Nutrition Helper Website"/>
                    <a href="https://chris-15.github.io/Nutrition-Helper-Project1/" target="blank">
                        <div>
                        <h3>Nutrition Helper</h3> 
                        <h4> JavaScript/Tailwind/APIs</h4>
                        </div>    
                    </a>
                </figure>
                <figure className="small" >
                    <img src="./assets/images/Run-buddy-snap.jpg" alt="Picutre of Run-Buddy Website"/>
                    <a href="https://timk76.github.io/run-buddy/" target="blank">
                        <div>
                        <h3>Run Buddy</h3> 
                        <h4>HTML/CSS</h4>
                        </div>
                    </a>    
                </figure>
                <figure className="small">
                    <img  src="./assets/images/Placeholder.png" alt="placeholder image"/>
                    <a href="" target="blank">
                        <div>
                            <h3>Placeholder</h3> 
                            <h4>MERN Stack</h4>
                        </div>
                    </a>
                </figure>
                <figure className="small">
                    <img src="./assets/images/Placeholder.png" alt="placeholder image"/> 
                    <a href="" target="blank">
                        <div>
                        <h3>Placeholder</h3> 
                        <h4>REACT/JavaScript/CSS</h4>
                        </div>
                    </a>
                </figure>

            </article>
        </section>
    );
}

export default Project;