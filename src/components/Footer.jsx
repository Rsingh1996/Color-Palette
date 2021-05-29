import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
    <footer className="footer">
    <h1>Color does not add a pleasant quality to design - it reinforces it.</h1>
    <p> Copyright ⓒ  {year}</p>
    </footer>)
}

export default Footer;