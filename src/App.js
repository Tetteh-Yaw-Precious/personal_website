import React from "react";
import {  useLocation } from "react-router-dom";
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
            <Landingpage />
            <About />
            <Work />
            <Contact />
      </AnimatePresence>
    </div>
  );
};

export default App;
