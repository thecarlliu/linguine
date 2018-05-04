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