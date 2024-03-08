import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [activeForm, setActiveForm] = useState("");
  return (
    <div>
      {/* <div>
        <button
          className="btn btn-primary"
          onClick={() => setActiveForm("signIn")}
        >
          Sign In
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setActiveForm("signUp")}
        >
          Sign Up
        </button>
      </div> */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            NARVS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link
                onClick={() => setActiveForm("signIn")}
                active={activeForm === "signIn"}
              >
                Sign In
              </Nav.Link>
              <Nav.Link
                onClick={() => setActiveForm("signUp")}
                active={activeForm === "signUp"}
              >
                Sign Up
              </Nav.Link> */}
              <Nav.Link eventKey="1" as={Link} to="/signIn">
                Sign In
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/signUp">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div>
        {activeForm == "signIn" && <SignIn />}
        {activeForm == "signUp" && <SignUp />}
      </div> */}
    </div>
  );
}

export default Home;
