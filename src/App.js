import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Globalstyles from "./components/Globalstyles";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import Nav from "./components/Nav";
import NavNew from "./components/NavNew";
//animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [navStatus, setnavStatus] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Globalstyles />
      <NavNew navStatus={navStatus} setnavStatus={setnavStatus} />
      <AnimatePresence exitBeforeEnter>
        <Landingpage navStatus={navStatus} setnavStatus={setnavStatus} />
        <About />
        <Work />
        <Contact />
      </AnimatePresence>
    </div>
  );
};

export default App;
