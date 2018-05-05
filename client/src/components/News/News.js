import React from "react"
import "./News.css"

const news = require ("../../news.json");

const News = () => (
 <div>
   <div className="grid-x medium-12">
       {
           News.map((scoop)=>(
               <div className="cell medium-2">
                    <ul>
                        <li>{scoop.name}</li>
                        <li>{scoop.image}</li>
                        <li>{scoop.item}</li>
                        <li>{scoop.text}</li>
                    </ul>
                </div>
               ))                         
       }
   </div>
 </div>
 )
export default News;