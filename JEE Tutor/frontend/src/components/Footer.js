import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h6>JEE EXAM TUTOR</h6>
        </Col>
        <Col md="4" className="footer-copywright">
          <h6>Webtech mini-project</h6>
        </Col>
        <Col md="4" className="footer-copywright">
          <h6>Aditya Rao - Ajey Bhat - Abhishek SV</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
