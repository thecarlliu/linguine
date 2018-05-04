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
                        {
                            shows.list.map((show)=>(
                                <li>{show.date}</li>
                                <li>{show.venue}</li>
                                <li>{show.city}</li>
                                <li>{show.state}</li>
                                <li>{show.tickets}</li>
                            ))
                        }
                    </ul>
                </div>                                    
           ))
       }
   </div>
 </div>













createShows: function (shows) {
    return shows.map(this.createShows);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            {this.createShows(shows.date, shows.venue, shows.location, shows.tickets)}
          </div>
        </div>
      </div>
    );
export default Shows;

 /*/*  <div>
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
);*/*/