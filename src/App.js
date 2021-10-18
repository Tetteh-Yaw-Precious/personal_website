import React from "react";
import Globalstyles from "./components/Globalstyles";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Globalstyles />
      <Landingpage />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
