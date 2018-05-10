import React from "react"
import "./Bio.css"

const bio = require ("../../bio.json");

const Bio = () => (
	<div>
    <div className="line"><hr></hr></div>
	<h2>Bio</h2>
    	<div>
    	    <img className="bioPic"src={bio.image}/>
            <h3>{bio.subheader}</h3>
        	<p>{bio.text}</p>
            <div className="line"><hr></hr></div>
        	<h2>{bio.video}</h2>
        	<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5XmnmEyaKQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    	</div>
    </div>
);

export default Bio;