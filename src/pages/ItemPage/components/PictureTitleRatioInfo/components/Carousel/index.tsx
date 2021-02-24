import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const CarouselComponent: React.FC<Props> = ({ item }) => {
  return (
    <Styles.Wrapper>
      <Carousel
        transitionTime={1000}
        interval={4000}
        className={Styles.componentCSSClasses}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <Styles.HeroImageWrapper>
          <Styles.ResponsiveImage src={item.image} alt="cup" />
        </Styles.HeroImageWrapper>
        <Styles.HeroImageWrapper>
          <Styles.ResponsiveImage src={item.image} alt="cup" />
        </Styles.HeroImageWrapper>
        <Styles.HeroImageWrapper>
          <Styles.ResponsiveImage src={item.image} alt="cup" />
        </Styles.HeroImageWrapper>
      </Carousel>
    </Styles.Wrapper>
  );
};

export default CarouselComponent;
