import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SubjectCards(props) {
  return (
    <Card>
      <Button
        variant="outline-secondary"
        href={props.demoLink}
        style={{backgroundColor:"rgb(0,0,70,0.99)"}}  
      >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" 
                
        style={{backgroundColor:"rgb(0,0,70,0.99)",
        border: "1px solid white"
}}/>
      <Card.Body>
                
            <Card.Title style={{color:"white"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify"}}>
          {props.description}
        </Card.Text>

      </Card.Body>
          </Button>
    </Card>
  );
}
export default SubjectCards;
