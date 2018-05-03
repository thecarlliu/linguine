import React from "react"
import "./Bio.css"

const bio = require ("../../bio.json");

const Bio = () => (
    <div>
        <p> {bio.text}</p>
        <hr> </hr>   
    </div>
);

export default Header;