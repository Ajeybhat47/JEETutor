import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div >
      <Typewriter 
       onInit={(typewriter)=> {
       typewriter
       .typeString("Get started!")
       .pauseFor(5000)
       .deleteAll()
       .typeString("Start learning!")
       .start();
       }}
       />
    <Typewriter
      options={{
        strings: [
          "",
          "Curated Video Courses!",
          "NCERT Textbook PDF!",
          "Previous Year Papers!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
      </div>
  );
}

export default Type;
