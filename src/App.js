import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Globalstyles from "./components/Globalstyles";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Nav from "./components/Nav";


const App = () => {
  return (
    <>
      <Router>
        <Globalstyles />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Work">
            <Work />
          </Route>
          <Route exact path="/ContactUs">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
