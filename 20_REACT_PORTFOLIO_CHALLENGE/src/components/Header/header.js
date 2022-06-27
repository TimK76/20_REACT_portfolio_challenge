import React from 'react';
import Navigation from '../Navigation/navigation';


function Header(props) {
    console.log("Inside Header ", props)
    return(
        <header>
            <h1>Timothy Knight</h1>
            <Navigation setCurrentPage = {props.setCurrentPage} />
        </header>
    );
}

export default Header;