import React from "react"
import "./News.css"

const news = require ("../../news.json");

const News = () => (
 <div>
   <div>
        <div className="line"><hr></hr></div>
       {
           news.map((scoop)=>(
               <div className="cell medium-2">
                    <div>
                        <h2>{scoop.name}</h2>
                        <img className="newsPic"src={scoop.image}/>
                        <h4>{scoop.item}</h4>
                        <h3>{scoop.subheader}</h3>
                        <p>{scoop.text}</p>
                    </div>
                </div>
               ))                         
       }
   </div>
 </div>
 )
export default News;