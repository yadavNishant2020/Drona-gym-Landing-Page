import React from "react";
import Testcss from "../styles/css modules/test.module.css";
import {Carousel,Item} from 'react-bootstrap';
function Test() {
  return (
    <div>
      <div className={Testcss.container}>
        <p className={Testcss.heading}>TESTIMONIAL</p>
        <div className={Testcss.innerContainer}>
          <Carousel fade className={Testcss.carousel} controls='false' >
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="../img/p1.jpg"
                alt="First slide"
              />
              <Carousel.Caption className={Testcss.caption}>
                <h3> Keren G</h3>
                <p>
                "Buy this now. Gym was worth a fortune to my company. Gym is worth much more than I paid."
            </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="../img/p2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption className={Testcss.caption}>
                <h3>Dyann E.</h3>
                <p>"Gym impressed me on multiple levels."</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/p3.png"
                alt="Third slide"
              />
              <Carousel.Caption className={Testcss.caption}>
                <h3>Ron Z</h3>
                <p>
                "I couldn't have asked for more than this. Gym is the most valuable business resource we have EVER purchased."
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <img src="../img/about.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Test;
