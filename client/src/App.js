import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => (

    <Router>
        <div>
       		<Switch>
            	<Route exact path="/" component={Home} />
			</Switch>
        </div>
    </Router>

);

export default App;
