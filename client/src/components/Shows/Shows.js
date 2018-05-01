import React from "react"
import "./Shows.css"

const shows = require ("../../shows.json");

const Shows = () => (
    <div>
        <h1>
            {headerInfo.bandName}
        </h1>
        <ul>
            <li className="NavItem"> News </li>
            <li className="NavItem"> Shows </li>
            <li className="NavItem"> Bio </li>
            <li className="NavItem"> Contact </li>
        </ul>   
    </div>
);

export default Header;