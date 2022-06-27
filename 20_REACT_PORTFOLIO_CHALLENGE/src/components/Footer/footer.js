import React from 'react';
import {FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
        <div id="footer">

            <a className="icons" href="https://www.linkedin.com/in/timothy-knightmoore/" target = "blank" rel="noopener noreferrer"><FaLinkedin size={80}/>
            </a>
            <a className="icons" href="https://github.com/TimK76" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={80}/>
            </a>
            <a className="icons" href="https://stackoverflow.com/users/17856269/timk" target="_blank" rel="noopener noreferrer"><FaStackOverflow size={80}/>
            </a>
        </div>
    );
}

export default Footer;