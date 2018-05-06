import React from "react"
import "./Bio.css"

const bio = require ("../../bio.json");

const Bio = () => (
	<div>
	<h2>Bio</h2>
    	<div>
        	<p>{bio.text}</p>
    	</div>
    </div>
);

export default Bio;