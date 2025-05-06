import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Search = ()=>{
    const [input, setInput] = useState({});
    const [mydata, setMydata]= useState([]);

      const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
   }


    const handleSubmit=async(e)=>{
        e.preventDefault();
    const api = "http://localhost:8000/api/search";
            
        const response = await axios.post(api, input);
        console.log(response.data);
        setMydata(response.data);
     }

     const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.name} </td>   
            <td>{key.price} </td>   

           
          </tr>
        </>
      )
})

    return(
        <>
        <h1>search page by name</h1>
            <Form style={{width:"50%", margin:"auto"}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Name</Form.Label>
        <Form.Control type="text" name='name'  onChange={handelInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </Form>

    <hr  size="4" color="red" />

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Product Price</th>
          
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>


        </>
    )
}

export default Search;