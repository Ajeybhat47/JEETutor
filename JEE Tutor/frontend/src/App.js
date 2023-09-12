import './App.css';

import React, { useState, useEffect } from "react";

// import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

import PrevPaper from './components/PreviousPaper/PrevPaper';
import NavBar from './components/Navbar';
import Footer from './components/Footer'
import Videoslider from './components/Videos/VideoSlider'
import Textbook from './components/Textbook/Textbook';
import Login from './components/signup/login_component';
import Signup from './components/signup/signup_component';
import UserDetails from './components/signup/userDetails';

import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Subjects from './components/Subjects/Subjects';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">

        {(window.location.href!="http://localhost:3000/login"&&window.location.href!="http://localhost:3000/sign-up"&&window.location.href!="http://localhost:3000/login"&&window.location.href!="http://localhost:3000/")&&
          <NavBar/>}
          
        <Routes>
          <Route path="/" element={<Login/>}/> 

        <Route path="/home" element={<UserDetails/>}/>

          {/* <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>  */}

          <Route path="/physics" element={<Videoslider sub="phy"/>}/>
          <Route path="/chemistry" element={<Videoslider sub="chem"/>}/>
          <Route path="/maths" element={<Videoslider sub="maths"/>}/>


          <Route path="/subject" element={<Subjects/>}/>
          <Route path="/textbook" element={<Textbook/>}/>
          <Route path="/prevpaper" element={<PrevPaper/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  </Router>
  );
}

export default App;
