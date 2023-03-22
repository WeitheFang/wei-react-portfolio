import React from "react";
import { Helmet } from "react-helmet";
import PortfolioContainer from "./components/portfolioContainer";
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
      <PortfolioContainer />
    </div>
  );
}

export default App;
