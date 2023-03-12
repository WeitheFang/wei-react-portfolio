import React from "react";
import NavBar from "./components/navbar";
import AboutMe from "./components/about-me";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
