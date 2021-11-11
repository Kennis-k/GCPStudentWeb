import React from 'react'
import Nav_Top from './components/Navbar/Nav_Top'
import AboutUS from "./components/AboutUS/AboutUS";
import Main from "./components/Main/Main";
import News from    "./components/News/News";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav_Top />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/main" exact component={Main} />
                    <Route path="/aboutUS" exact component={AboutUS} />
                    <Route path="/news" exact component={News} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;



