import React from "react"
import "./Header.css"

const headerInfo = require ("../../../public/headerInfo.json");

const Header = () => (
    <div>
        <h1>
            {headerInfo.bandName}
        </h1>  
    </div>
);

export default Header;


