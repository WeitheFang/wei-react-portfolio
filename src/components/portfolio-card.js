import "../style/portfolio.css";
const React = require("react");
const { Card, Button, Col } = require("react-bootstrap");

function PortfolioCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.img}
        alt="card-img"
        className="card-img"
      />
      <Card.Body className="card-body">
        <Card.Title className="project-title">
          <h3>
            <strong>{props.title}</strong>
          </h3>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Col
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            GitHub
          </Button>
          {"\n"}
          {"\n"}
          <Button variant="primary" href={props.demoLink} target="_blank">
            Demo
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
