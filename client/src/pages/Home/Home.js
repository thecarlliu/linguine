import React from "react";
import "./Home.css";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import News from "../../components/News";
import Shows from "../../components/Shows";
import  Bio from "../../components/Bio";
import Footer from "../../components/Footer";

const Home = () => (
    <div className="grid-x medium-12">
        <Header/>
        <Nav/>
        <News/>
        <Shows/>
        <Bio/>
        <Footer/>
    </div>
);

export default Home;