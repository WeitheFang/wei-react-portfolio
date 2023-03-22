import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import githubLogo from "../assets/images/github-logo.png";
import linkedinLogo from "../assets/images/linkedin-logo.png";
import emailLogo from "../assets/images/email-logo.png";
import "../style/navbar.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <h4>Hi there!</h4>
        <p>
          I'm Wei, a full stack web developer based in Toronto, Canada. If you
          would like to get in touch, please feel free to leave me a message at
          contact form below. I will get back to you as soon as possible.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function NavBar({ currentPage, handlePageChange }) {
  // const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const onUpdateActiveLink = (link) => {
  //   setActiveLink(link);
  // };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                currentPage === "about-me"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => handlePageChange("about-me")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              className={
                currentPage === "portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => handlePageChange("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={
                currentPage === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className={
                currentPage === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/WeitheFang"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/wei-chi-fang-60610523b/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinLogo} alt="linkedin" />
              </a>
              <a href="mailto:weichi.fang@mail.utoronto.ca">
                <img src={emailLogo} alt="email" />
              </a>
            </div>
            <button
              className="vvd"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <span>Let's Connect</span>
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
