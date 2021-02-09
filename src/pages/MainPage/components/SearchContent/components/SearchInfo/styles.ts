import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, font } = theme;

export const Wrapper = styled.div`
  padding: 15px;
  text-align: left;
  background-color: ${colors.gray_background};
`;

export const SearchingContents = styled.p`
  margin: 0;
  font-size: ${font.size.md};
`;

export const OffersFound = styled.p`
  margin: 5px 0 0 0;
  font-size: ${font.size.base};
  color: ${colors.gray_text};
`;

export const Category = styled.p`
  margin: 15px 0 0 0;
  font-size: ${font.size.base};
`;

export const CategoryColoredText = styled.span`
  color: ${colors.orange};
`;
