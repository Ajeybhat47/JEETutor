import React, { Component, useState, useEffect} from "react";
import axios from "axios";

import Slider from "react-slick";

import Videocard from './VideoCard'
import ReactPlayer from 'react-player'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./video.css"





export default function Videoslider(props){

  const [vidurl, setVidurl] = useState("");
  const [data, setData] = useState();

    if(props.sub=="maths")
        var id="6384c26d4909c4eac292e637";
    else if(props.sub=="phy")
        var id="6384c9c94909c4eac29b2aba";
    else
        var id="6384c5f74909c4eac2970ca2";

        useEffect(()=>{
          if(!data)
      axios.get('http://localhost:5000/subjects/'+id)
      .then(response => {
          setData(response.data);
          setVidurl(response.data.items[0].contentDetails.videoId)
      })
      .catch((error) => {
          console.log(error);
        })})

    const settings = {
      dots: true,
      arrows:true,  
      infinite: true,
      speed: 750,
      slidesToShow: 6,
      slidesToScroll:6,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
 
    };

    return (
      <div>
      {
      data
      &&
      <div>
        <center> <ReactPlayer playing={false} fluid url={"https://www.youtube.com/watch?v="+vidurl} light={false} controls={true}/></center>
      <br></br>
      <Slider {...settings}>
        {data.items.map(ele=>
        < Videocard imgPath={ele.snippet.thumbnails.medium.url} title={ele.snippet.title} vidid={ele.contentDetails.videoId} changeurl={setVidurl}/>)}
        </Slider>
        </div>
  }
        <br></br>
        <br></br>
        {/* <p style={{"whiteSpace":"pre-wrap"}}>{viddesc}</p> */}
      </div>
    );
}
