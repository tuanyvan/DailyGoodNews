import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (this.props.withNavBrand) {
      this.navBrand = <Navbar.Brand>Good News, Everyone</Navbar.Brand>;
    }
  }

  render() {
    return (
      <Navbar className="px-4 py-3" collapseOnSelect expand="lg">
        {this.navBrand}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

// export default function Navigation() {
//     return (
//         <Navbar className="px-4 py-3" collapseOnSelect expand="lg">
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav>
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link>About</Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }
