import { useState } from "react";
import { Container, Col, Form } from "react-bootstrap";
import { validateEmail } from "../utils/helper";
import "../style/contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

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
    alert(`Thank you for your message, ${firstName}!`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Container fluid className="contact" id="contact">
      <Container>
        <Col size={12} md={12}>
          <h1>
            Contact <strong>Me</strong>
          </h1>
          <p>Please feel free to leave a message</p>
          <Form className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>First Name</strong>
                </h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>Last Name</strong>
                </h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>
                  <strong>Email Address</strong>
                </h5>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
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
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div
              className="submit"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                className="submit-btn"
                onClick={handleFormSubmit}
              >
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
