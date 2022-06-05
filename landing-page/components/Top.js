import React from 'react'
import Topcss from '../styles/css modules/top.module.css'
import {Navbar, Container,Nav} from 'react-bootstrap'
function Top() {
  return (
    <>
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
More      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <div className={Topcss.background}>
    <div className={Topcss.img}>
        <img src="/img/intro.png"></img>
    </div>

    </div>
    <div className={Topcss.heading}>
        <p>BE <span className={Topcss.blk}>FIT</span>,<br/>LIVE <span className={Topcss.blk}>MORE</span></p>
        <p></p>
    </div>
    
    </>
  )
}

export default Top