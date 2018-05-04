import React from "react"
import "./Shows.css"

const shows = require ("../../shows.json");

const Shows = () => (
    <div>
        <h1>
            {headerInfo.bandName}
        </h1>
        <div>
            <h3> {shows.date} </h3>
            <h3> {shows.venue} </h3>
            <h3> {shows.location} </h3>
            <h3> {shows.tickets}</h3>
            <hr> </hr>   
        </div>
    </div>
);

export default Shows;
