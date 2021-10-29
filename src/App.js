import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Globalstyles from "./components/Globalstyles";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
//animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Globalstyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
};

export default App;
