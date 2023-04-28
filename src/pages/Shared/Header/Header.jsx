import moment from "moment";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="text-secondary mt-2 mb-0">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="mt-2">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={70} className="fw-semibold">
          I can be a React component, multiple React components, or just some
          text... <Button className="btn btn-sm">See more</Button>
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="fs-5 fw-semibold">
                {/* <img className="img-fluid w-25 m-0 p-0" src={profile} alt="" /> */}
                profile
              </Nav.Link>
              <Nav.Link>
                <Button className="bg-dark px-4">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
