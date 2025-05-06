import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
function Display() {
  const [mydata, setMydata] = useState([]);

  const loadData = async()=>{
    const api = "http://localhost:8000/api/display";
    
    const response  =await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }


  useEffect(()=>{
    loadData();
  },[]);

let sno =0;
   const ans = mydata.map((key)=>{
    sno++;
    return(
        <>
        <tr>
            <th>{sno}</th>
            <th>{key.name}</th>
            <th>{key.price}</th>
        </tr>
        </>
    )
   })


  return (
    <>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
      </Table>
    </>
  )
}

export default Display