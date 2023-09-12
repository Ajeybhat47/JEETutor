import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

function Videocard(props) {
  return (
    <Card className="videocard" onClick={()=>{props.changeurl(props.vidid);}}>
      <Card.Img className="videocardimg" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="videocardtext" style={{color:"black",fontSize:"12px"}}>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default Videocard;
