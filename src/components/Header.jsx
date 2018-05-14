import React from 'react';


const Header = (props) => {
    return (
        <header id="header" className="header">
            {props.children}
        </header>
    );
}

export default Header;