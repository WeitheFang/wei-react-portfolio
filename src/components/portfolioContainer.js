import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import AboutMe from "./pages/about-me";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("about-me");

  const renderPage = () => {
    if (currentPage === "about-me") {
      return <AboutMe />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
