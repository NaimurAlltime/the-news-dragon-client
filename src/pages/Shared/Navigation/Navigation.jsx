import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
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

export default Navigation;
