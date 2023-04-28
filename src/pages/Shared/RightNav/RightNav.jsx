import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bg from "../../../assets/bg1.png";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-secondary mt-2 px-5">
        {" "}
        <FcGoogle /> Login With Google
      </Button>
      <Button variant="outline-success mt-2 px-5">
        {" "}
        <FaGithub className="ms-1" /> Login With Github
      </Button>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="mt-3">
            <FaFacebook style={{ color: "#3b5998", marginRight: "12px" }} />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
            <FaTwitter style={{ color: "#00acee", marginRight: "12px" }} />{" "}
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
            <FaInstagram style={{ color: "#fa7e1e", marginRight: "12px" }} />{" "}
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-5">
        <QZone></QZone>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "90%",
            height: "100%",
          }}
          className="text-white text-center py-5"
        >
          <div className="px-5">
            <h2>Create an Amazing Newspaper</h2>
            <p className="mt-4">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button className="btn btn-danger fs-5 py-2 mt-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
