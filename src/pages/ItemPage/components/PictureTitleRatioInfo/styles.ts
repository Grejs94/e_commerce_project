import styled from "@emotion/styled";
import ShareIconMaterial from "@material-ui/icons/Share";
import StarBorderIconMaterial from "@material-ui/icons/StarBorder";

import { theme } from "assets/theme";

const { colors, font } = theme;

export {
  HeroImageWrapper,
  ResponsiveImage,
  SpaceBetweenContainer,
} from "pages/ItemPage/styles";

export const Wrapper = styled.div`
  text-align: left;
  font-size: ${font.size.sm};
`;

const iconsCss = `
    color: ${colors.blue_link};
    cursor: pointer;
  `;

export const ShareIcon = styled(ShareIconMaterial)`
  && {
    ${iconsCss}
  }
`;

export const StarBorderIcon = styled(StarBorderIconMaterial)`
  && {
    ${iconsCss}
    margin-left: 15px;
  }
`;

export const TextInfoContainer = styled.div`
  :p {
    margin: 0;
  }
`;

export const Title = styled.p`
  text-align: left;
  font-weight: ${font.weight.bold};
  font-size: ${font.size.base};
`;

export const ItemRatioContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 25px;
`;

export const ItemRatio = styled.span`
  padding-top: 3px;
  margin-right: 5px;
  font-size: ${font.size.sm};
`;

const iconBackgroundCss = `
background-repeat: repeat-x;
background-position: 0;
background-size: 20px 20px;
height: 20px;
`;

type BarsProps = {
  numberOfStars: number;
};

export const Icon = styled.div`
  ${iconBackgroundCss}
  background-image: url(https://assets.allegrostatic.com/metrum/icon/star-full-83fe3991e5.svg);

  width: ${(props: BarsProps) => `${props.numberOfStars * 20}px`};
`;

export const RatioIconContainer = styled.div`
  display: flex;
  // justify-content: flex-end;
  background-image: url(https://assets.allegrostatic.com/metrum/icon/star-empty-ea589602cb.svg);
  width: 100px;
  ${iconBackgroundCss}
`;

export const PeopleWhoRated = styled.span`
  padding-top: 3px;
  margin-left: 5px;
  font-size: ${font.size.sm};
  color: ${colors.blue_link};
`;
