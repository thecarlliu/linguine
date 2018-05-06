import React from "react"
import "./Footer.css"

const footer = require ("../../footer.json");

const Footer = () => (
     <div>
        <p>{footer.text}</p>
    </div>
);

export default Footer;