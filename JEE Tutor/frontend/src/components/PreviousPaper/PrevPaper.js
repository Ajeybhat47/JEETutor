import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



/*
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
*/

function PrevPaper() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  
    const settings = {
      dots: true,
      arrows:true,  
      infinite: true,
      speed: 500,
      vertical:true,
      verticalSwiping:true,
      focusOnSelect: true,

      // centerMode:true,
      slidesToShow: 9,
      slidesToScroll:9
    };



  return (
    <div >
      <Container fluid className="prevyear-section" >
      <Container className="prev">

        <h1>Download:</h1>

        <Slider {...settings}>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174726.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />16th March shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018171615.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />16th March shift-2 2021
          </Button>
        </Row>

        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018171717.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />17th March shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018171831.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />17th March shift-2 2021
          </Button>
        </Row>


        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018172015.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />18th March shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018172234.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />18th March shift-2 2021
          </Button>
        </Row>



        <Row className="mb-3" style={{justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174429.pdf"
            target="_blank"
            style={{ maxWidth:"1000px"}}
            >
            <AiOutlineDownload />3rd Aug shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174504.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload/>3rd Aug shift-2 2021 
          </Button>
        </Row>

        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174542.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />4th Aug shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174617.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />4th Aug shift-2 2021
          </Button>
        </Row>


        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174726.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />26th Aug shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174753.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />26th Aug shift-2 2021
          </Button>
        </Row>

        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174845.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />27th Aug shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018174926.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />27th Aug shift-2 2021
          </Button>
        </Row>


        <Row className="mb-3" style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018175009.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />31st Aug shift-1 2021
          </Button>
        </Row>
        <Row className="mb-3" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-light"
            href="https://www.nta.ac.in/Download/ExamPaper/Paper_20211018175055.pdf"
            target="_blank"
            style={{ maxWidth: "1000px" }}
          >
            <AiOutlineDownload />31st Aug shift-2 2021
          </Button>
        </Row>
        </Slider>
        </Container>

      </Container>
    </div>
  );
}

export default PrevPaper;