import React from "react";
import NavBar from "./components/navbar";
import AboutMe from "./components/about-me";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
