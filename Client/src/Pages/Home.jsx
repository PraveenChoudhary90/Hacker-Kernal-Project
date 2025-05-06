import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
function Home() {
    const navigate = useNavigate();

 const logout = ()=>{
    localStorage.clear();
    navigate("/login")
 }


  return (
    <>
    <h1 style={{backgroundColor:"lightpink", fontSize:"50px",textTransform:"uppercase", textAlign:"center",padding:"35px"}}>Welcome To Home Dashboard</h1>
    <h4 style={{textAlign:"right" ,backgroundColor:"lightblue", padding:"10px"}}>Email:{localStorage.getItem("email")}</h4>
    <div id="data" style={{textAlign:"right"}}>
    <Button variant="warning" onClick={logout}  >Logout</Button>
    </div>

    <div id="nav">
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}  to="#">Task-Dhshboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="add">Add Product</Nav.Link>
            <Nav.Link as={Link}  to="display">Display Poduct </Nav.Link>
            <Nav.Link as={Link}  to="search">Search by Name</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>

      <Outlet/>

    </>
  )
}

export default Home