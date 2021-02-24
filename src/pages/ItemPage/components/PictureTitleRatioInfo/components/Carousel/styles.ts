import styled from "@emotion/styled";

import { css } from "@emotion/css";

import { HeroImageWrapper } from "pages/ItemPage/styles";

export { HeroImageWrapper, ResponsiveImage } from "pages/ItemPage/styles";

export const CarouselWrapper = styled(HeroImageWrapper)``;

export const Wrapper = styled.div`
  background-color: white;
`;

export const componentCSSClasses = css`
  .carousel .slide {
    background: none;
  }

  .carousel .carousel-status {
    color: black;
    text-shadow: none;
    font-size: 20px;
  }

  .carousel .control-dots .dot {
    background: black;
  }
`;
