import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const HandelSubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/api/login";
    try {
        const response = await axios.post(api ,{email:email, password:password} )
     console.log(response.data);
     alert(response.data.msg);
     localStorage.setItem("email", response.data.User.email);
     navigate("/home"); 
    } catch (error) {
        alert(error.response.data.msg);
        
    }
    
  }
  useEffect(()=>{
   if( localStorage.getItem("email")){
    navigate("/")
    }
  },[])



  


  return (
    <>
    <div id="from">
    <h1>Login Page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" n value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}  > 
        Submit
      </Button>
    </Form>
    </div>

    </>
  )
}

export default Login;