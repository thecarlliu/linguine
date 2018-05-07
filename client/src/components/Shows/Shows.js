import React from "react"
import "./Shows.css"

const shows = require ("../../shows.json");

const Shows = () => (
 <div>
   <div>
                    <h2> Shows</h2>
                        <table className="showInfo">
                          <tr>
                              <th> DATE </th>
                              <th> VENUE </th>
                              <th> CITY </th>
                              <th> STATE </th>
                              <th> TICKETS </th>
                          </tr>
                        </table>
          {
                    shows.map((show)=>(
                        <div>
                            <table className="showInfo">
                                <tr>
                                    <td>{show.date}</td>
                                    <td>{show.venue}</td>
                                    <td>{show.city}</td>
                                    <td>{show.state}</td>
                                    <td>{show.tickets}</td>
                                </tr>
                            </table>
                </div>                                    
           ))
       }
   </div>
 </div>
 )
export default Shows;