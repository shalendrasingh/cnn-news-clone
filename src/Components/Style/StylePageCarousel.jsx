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

const StylePageCarousel = () => {
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
            src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1920,c_fill,g_auto,h_1080/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210225101252-01-moschino-milan-fashion-week-film-jungle-red.jpg"
            alt="img1"
          />
            <AbsoluteNews>
                <h4>Arts</h4>
                <h1>A photographer chronicles their gender transition through self potrait</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia ex aliquid iusto ipsam ratione similique? Reprehenderit vel vitae nam!</p>
            </AbsoluteNews>
          </Relative>
        </Slide>
        <Slide index={1}>
          <Relative>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1920,c_fill,g_auto,h_1080,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210304195407-04-diana-markosian-santa-barbara.jpg"
            alt="img2"
          />
          <AbsoluteNews>
            <h4>Arts</h4>
            <h1>A photographer tells her family's story about dark side of her American dreams</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia ex aliquid iusto ipsam ratione similique? Reprehenderit vel vitae nam!</p>
          </AbsoluteNews>
          </Relative>
        </Slide>
        <Slide index={3}>
          <Relative>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1920,c_fill,g_auto,h_1080/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210310110919-13-myanmar-tattoo-restricted.jpg"
            alt="img3"
          />
          <AbsoluteNews>
            <h4>Arts</h4>
            <h1>Myanmar protesters getting permanent symbol of resistance - tattoo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia ex aliquid iusto ipsam ratione similique? Reprehenderit vel vitae nam!</p>
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

export { StylePageCarousel };
