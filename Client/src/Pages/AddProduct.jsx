import React from 'react'
import  {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"; 

function AddProduct() {

      const [name, setName] = useState("");
      const [price, setPrice] = useState("");

const HandelSubmit = async(e)=>{
      e.preventDefault();
      const api = "http://localhost:8000/api/insertdata";
    try {
        const response = await axios.post(api ,{name:name, price:price} )
     console.log(response.data);
     alert(response.data.msg);
    } catch (error) {
        alert(error);
        
    }
}


  return (
    <>
    <div id="from">
    <h1>Add Product Page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text"  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}  > 
        Submit
      </Button>
    </Form>
    </div>

    </>
  )
}

export default AddProduct