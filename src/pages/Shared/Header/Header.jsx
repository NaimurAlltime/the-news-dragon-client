import moment from "moment";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
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
              <Nav.Link href="#features">
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link className="fs-5 fw-semibold">
                  <FaUserCircle className="fs-1" />
                </Nav.Link>
              )}
              {user ? (
                <Button onClick={handleLogOut} className="bg-dark px-4">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="bg-dark px-4">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
