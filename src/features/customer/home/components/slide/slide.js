import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

import image1 from "../../../../../assest/images/image.jpeg";
import image2 from "../../../../../assest/images/image2.jpeg";
import image3 from "../../../../../assest/images/image3.jpg";

export default function Slider() {
  return (
    <Carousel nextIcon={<></>} nextLabel="" prevIcon={<></>} prevLabel="">
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
