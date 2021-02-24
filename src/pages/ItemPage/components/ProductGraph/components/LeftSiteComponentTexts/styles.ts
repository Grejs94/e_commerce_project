import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, font } = theme;

export const Wrapper = styled.div`
  border-right: 1px solid ${colors.gray_background_medium};
  text-align: center;
  width: 50%;

  p {
    margin: 0;
  }
`;

export const PaddingWithBorderLeftContainer = styled.div`
  padding: 5px 0;
`;

export const FinalDegreeAsText = styled.p`
  && {
    margin-bottom: 10px;
  }
`;

export const AverageDegree = styled.span`
  font-size: ${font.size.xxl};
`;

export const MaxAverageDegreePossible = styled.span`
  font-size: ${font.size.base};
  color: ${colors.gray_text};
`;

export const NumberOfDegreeAndReview = styled.p`
  && {
    margin-top: 10px;
  }

  font-size: ${font.size.xs};
`;
