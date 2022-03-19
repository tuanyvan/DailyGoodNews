import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (this.props.withNavBrand) {
      this.navBrand = <Navbar.Brand>Good News, Everyone</Navbar.Brand>;
      this.navToggle = <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      this.navBar =
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    }
    else {
        this.navBar =
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
    }
  }

  render() {
    return (
      <Navbar className="px-4 py-3" collapseOnSelect expand="lg">
        {this.navBrand}
        {this.navToggle}
        {this.navBar}
      </Navbar>
    );
  }
}

export default Navigation;
