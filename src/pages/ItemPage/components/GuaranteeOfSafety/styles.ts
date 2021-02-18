import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors } = theme;

export const Wrapper = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${colors.umbrella};
  width: 34px;
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
