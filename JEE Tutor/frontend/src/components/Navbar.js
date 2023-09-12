import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./navbar.css"

function NavBar() {
  return (
    <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
      <Container>
        
        <Navbar.Brand href="home">JEE Exam Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="\home">Home</Nav.Link>
            <Nav.Link href="\subject">Courses</Nav.Link>
            <Nav.Link href="\textbook">Textbook</Nav.Link>
            <Nav.Link href="\prevpaper">PrevPaper</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="\login"> Logout </Nav.Link>
            </Nav>
            <Nav >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;