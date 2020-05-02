import React from "react";
import {
  Navbar,
  NavItem,
  Button,
  NavDropdown,
  MenuItem,
  Nav,
} from "react-bootstrap";

import {
  RiTruckLine,
  RiHeartLine,
  RiUser3Line,
  RiShoppingBagLine,
} from "react-icons/ri";
class TopMenu extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar-container border-bottom"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="user-name" href="#home">
          Dave Smith
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active href="#features">
              New
            </Nav.Link>
            <Nav.Link active href="#pricing">
              Ladies
            </Nav.Link>
            <Nav.Link active href="#pricing">
              Men's
            </Nav.Link>
            <Nav.Link active href="#pricing">
              Children's
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <RiTruckLine />
              Free Delivery On Orders over £60
            </Nav.Item>
            <Nav.Link eventKey={2} href="#">
              <RiHeartLine />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <RiUser3Line />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <RiShoppingBagLine />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default TopMenu;
