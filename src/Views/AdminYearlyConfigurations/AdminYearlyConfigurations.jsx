import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { BsHouseDoor ,BsPeople} from "react-icons/bs";
const AdminYearlyConfigurations = () => {
  return (
    <>
      <Navbar bg="dark" variant="#c58f8f">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      {/* this section for  */}
      {/* <Container> */}
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            
            <Nav.Link href="/home"><BsHouseDoor /> Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Yearly Configurations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><BsPeople/>User Accounts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Tournements</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Players</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Draws</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Results</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Gallery</Nav.Link>
          </Nav.Item>
        </Nav>
      {/* </Container> */}

      

      <br />
      <Container bg="red">
        <Row>
          <Col>1 of 2
          <img src="" alt="" />
          </Col>
          <Col>2 of 2</Col>
        </Row>
        
      </Container>
    </>
  );
};

export default AdminYearlyConfigurations;
