import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Component } from "react";

import logo from "/public/logo.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (this.props.withNavBrand) {
      this.navBar = (
        <div className="d-flex flex-row align-items-center">
          <Navbar.Brand href="/">
            <div className="d-flex flex-row align-items-center">
              <img
                className="img-fluid logo"
                src={logo.src}
                alt="Good News, Everyone logo"
              />
              <h1 className="mb-2 ms-3 fs-2">Good News, Everyone</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="p-0 mx-3" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="p-0 mx-3" href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      );
    } else {
      this.navBar = (
        <Nav>
          <Nav.Link className="p-0 mx-3" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="p-0 mx-3" href="/about">
            About
          </Nav.Link>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar
        className="px-4 py-3 justify-content-between"
        collapseOnSelect
        expand="lg"
      >
        {this.navBar}
      </Navbar>
    );
  }
}

export default Navigation;
