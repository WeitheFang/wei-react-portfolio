import { useState } from "react";
import { Container, Button, Col, Form } from "react-bootstrap";
import { validateEmail } from "../utils/helper";
import "../style/contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill out all fields");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Thank you for your message!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Container fluid className="contact" id="contact">
      <Container>
        <Col size={12} md={12}>
          <h2>Contact</h2>
          <p>Please feel free to leave a message</p>
          <Form className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>First Name</strong>
                </h5>
              </Form.Label>
              <Form.Control type="email" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>Last Name</strong>
                </h5>
              </Form.Label>
              <Form.Control type="email" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>Email Address</strong>
                </h5>
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>
                  <strong>Message</strong>
                </h5>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div
              className="submit"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="submit" className="submit-btn">
                <span>Submit</span>
              </button>
            </div>
          </Form>
        </Col>
      </Container>
    </Container>
  );
}

export default Contact;
