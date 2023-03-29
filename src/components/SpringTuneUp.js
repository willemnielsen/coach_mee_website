import React from "react";
import { Container, Col, Image } from "react-bootstrap";

const SpringTuneUp = ({ img1Src, img2Src }) => {
  console.log(img1Src);
  return (
    <>
      <Container fluid>
        <Col
          sm={12}
          style={{
            display: "flex",
            marginTop: "60px",
            justifyContent: "center",
          }}
        >
          <Image
            src={`/images/${img1Src}`}
            style={{ maxWidth: "765px", width: "100%" }}
          />
        </Col>
        <Col
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={`/images/${img2Src}`}
            style={{ maxWidth: "760px", width: "100%" }}
          />
        </Col>
      </Container>
    </>
  );
};

export default SpringTuneUp;
