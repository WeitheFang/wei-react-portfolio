import { Container, Row, Col } from "react-bootstrap";
import Typewritter from "typewriter-effect";
import bannerIcon from "../../assets/images/banner-icon.png";
import "../../style/about-me.css";

function AboutMe() {
  const dataText = [
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Node Developer",
    "MERN Developer",
  ];

  return (
    <section className="banner" id="about-me">
      <Container>
        <Row className="algin-items-center">
          <Col xs={12} md={6} xl={7} className="text-center">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I'm a `}
              <span className="wrap">
                <Typewritter
                  options={{
                    strings: dataText,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p>
              I am Wei, a full stack web developer based in Toronto, Canada!
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerIcon} alt="unicorn-cat" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
