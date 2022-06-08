import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
function Footer() {
    return (
        <div>
            <ul className="flex-row">
                <li className='m-2'>
                    <a href="https://www.linkedin.com/in/timothy-knightmoore/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li className='m-2'>
                    <a href="https://github.com/TimK76" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-github-square" />
                    </a>
                </li>
                <li className='m-2'>
                    <a href="https://stackoverflow.com/users/17856269/timk" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;