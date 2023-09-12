import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubjectCards from "./SubjectCards";
import physics from "../../assets/physics.jpg"
import chemistry from "../../assets/chemistry.jpg"
import maths from "../../assets/maths.jpg"

function Subjects() {
  return (
    <Container fluid>
      <Container>
        <h1>
          <strong className="purple">Subjects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <SubjectCards
              imgPath={physics}
              demoLink="/physics"              
              title="Physics"
            />
          </Col>

          <Col md={4}>
            <SubjectCards
              imgPath={chemistry}
              demoLink="/chemistry"              
              title="Chemistry"
            />
          </Col>

          <Col md={4}>
            <SubjectCards
              imgPath={maths}
              demoLink="/maths"              
              title="Maths"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Subjects;
