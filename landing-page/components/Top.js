import React from "react";
import Topcss from "../styles/css modules/top.module.css";
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap";
function Top() {
  return (
    <>
    {/* Navbar */}
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sitara Fitness</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Facilities</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                More{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* background */}
      <div className={Topcss.background}></div>
      <Container className="container-top">
        <Row className="section-top">
          <Col xs={12} md={6} className="section-top-right">
            <div className={Topcss.heading}>
              <p>
                BE <span className={Topcss.blk}>FIT,</span><br />
                LIVE <span className={Topcss.blk}>MORE</span>
              </p>
              <div className="mb-2">
    <Button className={Topcss.btn} variant="dark" size="lg">
      JOIN NOW
    </Button>
  </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="section-top-left">
            <img className={Topcss.img} src="/img/intro.png" />
          </Col>
          
        </Row>
      </Container>
     
    </>
  );
}

export default Top;
