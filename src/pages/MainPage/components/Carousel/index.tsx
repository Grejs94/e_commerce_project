import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { cup_100, cup_200, cup_400 } from "pictures/index";

import * as Styles from "./styles";

export default function CarouselComponent() {
  const showMessage = () => {
    console.log("Message");
  };

  return (
    <Styles.CarouselWrapper>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <div onClick={showMessage}>
            <img src={cup_100} alt="cup" />
          </div>
        </div>
        <div>
          <img src={cup_200} alt="cup" />
        </div>
        <div>
          <img src={cup_400} alt="cup" />
        </div>
      </Carousel>
    </Styles.CarouselWrapper>
  );
}
