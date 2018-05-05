import React from "react"
import "./News.css"

const news = require ("../../news.json");

const News = () => (
    <div>
        <h3> {news.name} </h3>
        <img src={news.image}/>
        <h4> {news.icon} </h4>
        <p> {news.text}</p>
        <hr> </hr>   
    </div>
);

export default News;

const News = () => (
 <div>
   <div className="grid-x medium-12">
       {
           News.map((scoop)=>(
               <div className="cell medium-2">
                    <ul>
                        {
                            news.list.map((scoop)=>(
                                <li>{scoop.name}</li>
                                <li>{scoop.image}</li>
                                <li>{scoop.item}</li>
                                <li>{scoop.text}</li>
                           		 ))
                        }
                    </ul>
                </div>
               ))                          
       }
   </div>
 </div>
export default News;