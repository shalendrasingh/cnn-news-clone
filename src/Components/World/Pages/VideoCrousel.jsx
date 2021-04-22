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

const VideoCrousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={3}
      interval={2000}
      isPlaying={true}
      style={{ position: "relative" }}
    >
      <Slider>
        <Slide index={0}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1920,c_fill,g_auto,h_1080/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210225101252-01-moschino-milan-fashion-week-film-jungle-red.jpg"
            alt="img1"
          />
        </Slide>
        <Slide index={1}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
            alt="img2"
          />
        </Slide>
        <Slide index={3}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Fashion-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900"
            alt="img3"
          />
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

export { VideoCrousel };
