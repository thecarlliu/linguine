import React from "react"
import "./Bio.css"

const bio = require ("../../bio.json");

const Bio = () => (
	<div>
	<h2>Bio</h2>
    	<div>
        	<p>{bio.text}</p>
        	<h2>{bio.video}</h2>
        	<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5XmnmEyaKQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    	</div>
    </div>
);

export default Bio;