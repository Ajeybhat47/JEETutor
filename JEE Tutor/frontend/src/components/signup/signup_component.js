import React, { Component } from "react";
import "./login.css"

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if(data.status=='ok')
            window.location.href = "./login";
        else
                  alert("user already exists");

      })
      .catch((err)=>{console.log(err)});
  }
  render() {

    return (
      <div style={{color:"black",paddingTop:100}} className="auth-wrapper">
          <div className="auth-inner">     

      <form onSubmit={this.handleSubmit}>

        <h3>Sign Up</h3>

        <div className="mb-3 txt_field">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />
        </div>

        <div className="mb-3 txt_field">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
            required
          />
        </div>

        <div className="mb-3 txt_field">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3 txt_field">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className=" text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>

      </div>
      </div>
    );
  }
}
