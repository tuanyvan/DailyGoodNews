import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Component } from "react";

import logo from "/public/logo.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (this.props.withNavBrand) {
      this.navBrand = 
        <Navbar.Brand>
          <div className="d-flex flex-row align-items-center">
            <img className="img-fluid logo" src={logo.src} alt="Good News, Everyone logo" />
            <h1 className="mb-0 ms-3 fs-2">Good News, Everyone</h1>
          </div>
        </Navbar.Brand>;
      this.navToggle = <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      this.navBar =
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link className="p-0 mx-3" href="#home">Home</Nav.Link>
                <Nav.Link className="p-0 mx-3" href="#about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    }
    else {
        this.navBar = 
            <Nav>
                <Nav.Link className="p-0 mx-3" href="#home">Home</Nav.Link>
                <Nav.Link className="p-0 mx-3" href="#about">About</Nav.Link>
            </Nav>
    }
  }

  render() {
    return (
      <Navbar className="px-4 py-3 justify-content-between" collapseOnSelect expand="lg">
        {this.navBrand}
        {this.navToggle}
        {this.navBar}
      </Navbar>
    );
  }
}

export default Navigation;
