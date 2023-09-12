import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

// import  './HomePage.css'

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div className="Home-page" >
        <div className="flexing">
          <div className="welcome">
               <Container className="home-section" id="home">
                   <Container className="home-content">
                      <Row>
                       <Col md={9} className="home-header">
                          <h1 style={{ paddingTop:150,textAlign: "left" }} className="heading">
                          Hi There!{" "}  👋🏻
                          <br></br>
                          {this.state.userData.fname},<strong style={{color:"cyan"}}> Welcome to JEE Tutor</strong>
                        </h1>
                        <p></p> 
                        <div style={{ paddingTop: 50, textAlign: "left" }}>
                        <Type />
                        </div>
                      </Col>

                    </Row>
                  </Container>
                </Container>
          </div>
        </div>
      </div>
    );
  }
}
