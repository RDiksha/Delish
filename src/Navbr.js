import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import { BsFillHouseFill, BsBookHalf, BsList, BsPhone } from "react-icons/bs";
import Homepage from './Homepage';
import Menu from "./Menu";
import Contact from "./Contact";

export const Navbr = () => {
    return <Router>
      <Navbar bg="dark" expand="lg" variant="dark">
        <LinkContainer to="/Homepage">
          <Navbar.Brand><BsFillHouseFill/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/Menu">
              <Nav.Link><BsBookHalf/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link><BsList/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link><BsPhone/></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Menu" component={Menu} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>

};

