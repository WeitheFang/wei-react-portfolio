import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./components/navbar";
import AboutMe from "./components/about-me";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wei's Portfolio</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <meta name="description" content="Portfolio" />
      </Helmet>
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
