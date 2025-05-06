import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
function TopNav() {
  return (
    <>
    <div id="nav">
     <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}  to="home">Task-Hacker-Kernal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default TopNav