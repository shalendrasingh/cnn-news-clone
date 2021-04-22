import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AbsoluteNews, Relative } from "../../Styles/ContainerStyles";

const CarouselThird = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      interval={2000}
      isPlaying={true}
      style={{ position: "relative" }}
    >
      <Slider>
        <Slide index={0}>
          <Relative>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://cdn.cnn.com/cnnnext/dam/assets/201027234044-09-world-series-1027-super-tease.jpg"
            alt="img1"
          />
            <AbsoluteNews>
                <h1>Body builder wants to change the view of what women should look like</h1>               
            </AbsoluteNews>
          </Relative>
        </Slide>
        <Slide index={1}>
          <Relative>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://cdn.cnn.com/cnnnext/dam/assets/200930233653-nba-finals-blm-kneel-super-tease.jpg"
            alt="img2"
          />
          <AbsoluteNews>
            <h1>Olympian pressured to 'perform better' and lose a few pounds</h1>
          </AbsoluteNews>
          </Relative>
        </Slide>
        <Slide index={3}>
          <Relative>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://cdn.cnn.com/cnnnext/dam/assets/200418150857-17-jordan-gallery-restricted-super-tease.jpg"
            alt="img3"
          />
          <AbsoluteNews>
            <h1>Oh you must be heavy boned.</h1>
          </AbsoluteNews>
          </Relative>
        </Slide>
      </Slider>
      <ButtonBack
        style={{
          position: "absolute",
          top: "50%",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      >
        <FaChevronLeft style={{ fontSize: "30px" }} />
      </ButtonBack>
      <ButtonNext
        style={{
          position: "absolute",
          top: "50%",
          right: "0%",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      >
        <FaChevronRight style={{ fontSize: "30px" }} />
      </ButtonNext>
    </CarouselProvider>
  );
};

export {CarouselThird };
