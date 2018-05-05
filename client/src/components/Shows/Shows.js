import React from "react"
import "./Shows.css"

const shows = require ("../../shows.json");

const Shows = () => (
 <div>
   <div className="grid-x medium-12">
       {
           shows.map((show)=>(
               <div className="cell medium-2">
                    <ul>
                       <li>{show.date}</li>
                       <li>{show.venue}</li>
                       <li>{show.city}</li>
                       <li>{show.state}</li>
                       <li>{show.tickets}</li>
                    </ul>
                </div>                                    
           ))
       }
   </div>
 </div>
 )
export default Shows;