import styled from "@emotion/styled";
import ButtonMaterial from "@material-ui/core/Button";

import { theme } from "assets/theme";

const { font, colors } = theme;

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  margin-top: 20px;
`;

// Image Components

export const ImageContainer = styled.div`
  padding: 10px;
  max-width: 30%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

// Description Components

export const InfoContainer = styled.div`
  padding-left: 15px;
  text-align: left;

  p {
    margin: 0;
  }
`;

export const greatSellerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const greatSellerImageContainer = styled.div`
  width: 25px;
  padding: 5px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;

export const PriceBeforeComma = styled.span`
  font-size: ${font.size.xxl};
`;

export const PriceAfterComma = styled.span`
  font-size: ${font.size.base};
  font-weight: ${font.weight.bold};
`;

export const SmartContainer = styled.div`
  display: flex;
  max-width: 90px;
  margin-left: 10px;
`;

// additional info component

export const GrayInfo = styled.div`
  color: ${colors.gray_text};
  font-size: ${font.size.sm};
  margin-top: 3px;
`;

export const GrayInfoBold = styled(GrayInfo)`
  margin-top: 10px;
  font-weight: ${font.weight.bold};
`;

// buttons components

export const ButtonContainer = styled.div`
  margin-top: 20px;
  height: 25px;
`;

export const Button = styled(ButtonMaterial)`
  && {
    color: ${colors.orange};
    // margin-top: 20px;
    height: 25px;
  }
`;
