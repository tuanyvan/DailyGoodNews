import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Component } from "react";

import logo from "/public/logo.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (this.props.withNavBrand) {
      this.navBar = (
        <Navbar expand="lg">
          <div className="container-fluid">
            <Navbar.Brand
              className="d-flex flex-row align-items-center"
              href="/"
            >
              <img
                className="img-fluid logo"
                src={logo.src}
                alt="Good News, Everyone logo"
              />
              <h1 className="mb-2 ms-3 fs-2">Good News, Everyone</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="p-0 mx-3" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="p-0 mx-3" href="/about">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      );
    } else {
      this.navBar = (
        <Navbar>
          <Nav>
            <Nav.Link className="p-0 mx-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="p-0 mx-3" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar>
      );
    }
  }

  render() {
    return <div>{this.navBar}</div>;
  }
}

export default Navigation;
