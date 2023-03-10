import React from "react";
import NavBar from "./components/navbar";
import AboutMe from "./components/about-me";
import Portfolio from "./components/portfolio";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
