import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";

const SiteNav = () => (

  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/search">Search</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Grocery List
      </NavItem>
      <NavItem eventKey={1} href="#">
        Notes
      </NavItem>
    <NavItem eventKey={1} href="/user">
        Userpage
      </NavItem>


    </Nav>
  </Navbar.Collapse>
</Navbar>

);

export default SiteNav;
