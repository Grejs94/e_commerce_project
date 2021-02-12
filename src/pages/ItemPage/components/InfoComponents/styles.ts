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
  min-height: 200vh;
  font-size: ${font.size.sm};
`;

// HeroImageWrapper is here

// ResponsiveImage is here

// SpaceBetweenContainer is here

export const PictureNumberContainer = styled.div`
  padding: 0 5px;

  span {
    letter-spacing: 1.3px;
    padding: 5px 8px;
    background: ${colors.gray_background_medium};
  }
`;

export const IconContainer = styled.div``;

const iconsCss = `
    color: ${colors.blue_link};
    cursor: pointer;
  `;

export const ShareIcon = styled(ShareIconMaterial)`
  && {
    ${iconsCss}
  }
`;

export const QualityContainer = styled.div``;

export const StarBorderIcon = styled(StarBorderIconMaterial)`
  && {
    ${iconsCss}
    margin-left: 15px;
  }
`;

export const textInfoContainer = styled.div`
  :p {
    margin: 0;
  }
`;

export const Title = styled.p``;

export const RatioIconContainer = styled.div``;

export const RatioIcon = styled.img``;

export const peopleWhoBought = styled.span``;

export const PriceIntiger = styled.span``;

export const PriceDecimal = styled.span``;

export const PeopleBought = styled.span``;
