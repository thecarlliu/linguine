import React from "react"
import "./News.css"

const news = require ("../../news.json");

const News = () => (
 <div>
   <div>
       {
           news.map((scoop)=>(
               <div className="cell medium-2">
                    <div>
                        <h2>{scoop.name}</h2>
                        <div>{scoop.image}</div>
                        <h4>{scoop.item}</h4>
                        <p>{scoop.text}</p>
                    </div>
                </div>
               ))                         
       }
   </div>
 </div>
 )
export default News;