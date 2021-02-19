import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, font } = theme;

export const Wrapper = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${colors.umbrella};
  min-width: 34px;
  height: 34px;
  border-radius: 50px;
`;

export const Icon = styled.div`
  background-image: url(https://assets.allegrostatic.com/opbox-showoffer-summary/statics/umbrella_4f1f43f2.svg);
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: contain;
  filter: brightness(0%)  invert(100%);
}
`;

export const TextContainer = styled.div`
  margin-left: 10px;
  text-align: left;
  color: ${colors.gray_text};
  font-size: ${font.size.sm};
`;

export const BoldText = styled.span`
  font-weight: ${font.weight.bold};
`;

export const Text = styled.p`
  margin: 0;
`;

export const TextAsLink = styled.span`
  color: ${colors.blue_link};
`;
