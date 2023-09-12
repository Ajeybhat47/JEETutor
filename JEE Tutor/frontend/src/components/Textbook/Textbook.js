import React, { useState, useEffect } from "react";

import maths from "../../assets/textbook/maths.pdf"
import chemistry from "../../assets/textbook/chemistry.pdf"
import physics from "../../assets/textbook/physics.pdf"

import Dropdown from 'react-bootstrap/Dropdown';

function Textbook() {
const [sub, setSub] = useState(["maths",maths]);

return (
  <div> 
    <p></p>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {sub[0]}
      </Dropdown.Toggle>
      
      <Dropdown.Menu variant="outline-light">
        <Dropdown.Item onClick={()=>setSub(["physics",physics])}>Physics</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSub(["chemistry",chemistry])}>Chemistry</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSub(["maths",maths])} >Maths</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <p></p>

      
      <object data={sub[1]}type="application/pdf" width="1000" height="1000"/>
      
  </div>);
}

export default Textbook;
