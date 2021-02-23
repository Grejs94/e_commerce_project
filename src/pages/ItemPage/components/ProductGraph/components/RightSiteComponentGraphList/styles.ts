import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { font, colors } = theme;

export const Wrapper = styled.div`
  width: 50%;
`;

export const PaddingContainer = styled.div`
  padding: 5px 0;
`;

export const SingleLineGraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DegreeASNumber = styled.span`
  font-size: ${font.size.xs};
  margin-right: 4px;
`;

export const StarContainer = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;

export const StarIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const HorizontalBarGraphEmpty = styled.div`
  min-width: 80px;
  height: 4px;
  background-color: #ddd;
  margin-right: 4px;
`;

type GraphFilledProps = {
  opinionPercentage: number;
};

export const HorizontalBarGraphFilled = styled.div<GraphFilledProps>`
  width: ${(props: GraphFilledProps) => `${props.opinionPercentage}%`};
  height: 4px;
  background-color: #ff5a00;
`;

export const GradesNumberContainer = styled.div`
  text-align: left;
  min-width: 27px;
`;

export const GradesNumberAtThisLevel = styled.span`
  margin-left: 6px;
  font-size: ${font.size.xs};
  color: ${colors.gray_text};
`;
