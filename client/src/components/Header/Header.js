import React from "react"
import "./Header.css"

const headerInfo = require ("../../../public/headerInfo.json");

const Header = () => (
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


