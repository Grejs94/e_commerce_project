import styled from "@emotion/styled";
import SearchIconEmotion from "@material-ui/icons/Search";
import ShoppingCartIconEmotion from "@material-ui/icons/ShoppingCart";
import ArrowBackIconMaterial from "@material-ui/icons/ArrowBack";

import { theme } from "assets/theme";

const { colors, font } = theme;

type BarsProps = {
  display: string;
};

///// DefaultVariantBar components

const barsCss = `
min-height: 50px;
align-items:center;
padding: 0 10px;
`;

export const DefaultVariantBar = styled.div<BarsProps>`
  display: ${(props: BarsProps) =>
    props.display === "openDefaultVariantBar" ? "flex" : "none"};
  justify-content: space-between;
  ${barsCss};
  background-color: white;
`;

export const Title = styled.p`
  margin: 0;
  font-size: ${font.size.xxl};
  font-weight: ${font.weight.bold};
  color: ${colors.orange};
`;

const IconsCss = `&& {
  font-size: 30px;
}`;

export const SearchIcon = styled(SearchIconEmotion)`
  ${IconsCss}
`;

export const ShoppingCartIcon = styled(ShoppingCartIconEmotion)`
  ${IconsCss}
`;

///////////// SearchVariantBar components

export const SearchVariantBar = styled.div<BarsProps>`
  display: ${(props: BarsProps) =>
    props.display === "openDefaultVariantBar" ? "none" : "flex"};
  justify-content: center;
  ${barsCss}
  background-color: white;
`;

export const ArrowBackIcon = styled(ArrowBackIconMaterial)`
  margin-right: 10px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.54);
`;

//// Else components
