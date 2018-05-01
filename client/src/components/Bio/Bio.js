import React from "react"
import "./Bio.css"

const bio = require ("../../bio.json");

const Bio = () => (
    <div>
        <h1>
            {headerInfo.bandName}
        </h1>
        <ul>
            <li className="NavItem"> Bio </li>
        </ul>   
    </div>
);

export default Header;