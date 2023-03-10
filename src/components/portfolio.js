import { Container, Col, Row } from "react-bootstrap";
import "../style/portfolio.css";
import PortfolioCard from "./portfolio-card";
import chefChoice from "../assets/images/chef-choice.png";
import vacationPicker from "../assets/images/vacation-picker.png";
import textEditor from "../assets/images/text-editor.png";
import noteTaker from "../assets/images/note-taker.png";
import weatherForecast from "../assets/images/weather-forecast.png";
import JS from "../assets/images/JS.png";

function portfolio() {
  return (
    <Container fluid className="project-section" id="portfolio">
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={chefChoice}
              title="Chef's Choice"
              description="A recipe bank that holds a plethora of recipes added by a variety of users. The recipes are all categorized by type of meal and/or preference of meal. Once you’ve chosen your meal, you can then use the embedded link to purchase the ingredients on the Walmart website."
              ghLink="https://github.com/WeitheFang/chefs-choice"
              demoLink="https://chefs-choise.herokuapp.com/"
            />
          </Col>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={vacationPicker}
              title="Provincial Park Vacation Picker"
              description="This application will take the user’s input as to what National Park in Ontario they would like to vacation at, then process the data attributed to that location to provide the user with the potential best week in terms of high temperatures. Along with that, the application will provide the user with a route to their destination by taking their address as an input and calculating the distance and time it will take to get there."
              ghLink="https://github.com/CrusaderJohn/national-park-vacation-picker"
              demoLink="https://crusaderjohn.github.io/national-park-vacation-picker/"
            />
          </Col>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={textEditor}
              title="Just A Text Editor"
              description="This application is a web-based text editor that allows users to create, edit, and save notes. The application works as a PWA and can be installed on a user's device. "
              ghLink="https://github.com/WeitheFang/wei-text-editor"
              demoLink="https://wei-text-editor.herokuapp.com/"
            />
          </Col>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={noteTaker}
              title="Note Taker"
              description="This application was designed for the user who wants to write and save notes, so that they can easily organize thoughts and keep track of tasks. This application uses the Express.js on the backend and the will save and retrieve notes from a JSON file."
              ghLink="https://github.com/WeitheFang/wei-note-taker"
              demoLink="https://wei-note-taker.herokuapp.com/"
            />
          </Col>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={weatherForecast}
              title="Weather Dashboard"
              description="This app was designed for the user who wants to check the current weather and the weather for the next 5 days."
              ghLink="https://github.com/WeitheFang/weichi-weather-dashboard"
              demoLink="https://weithefang.github.io/weather-dashboard/"
            />
          </Col>
          <Col size={12} sm={6} md={4} className="project-card">
            <PortfolioCard
              img={JS}
              title="JS Quiz App"
              description="This quiz app was designed for user who wants to test their skill in JavaScript. Users have 50 seconds to finish five multiple choice questions related to JavaScript. The faster you answer each question, the higher you can score."
              ghLink="https://github.com/WeitheFang/javascript-quiz-app"
              demoLink="https://weithefang.github.io/javascript-quiz-app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default portfolio;
