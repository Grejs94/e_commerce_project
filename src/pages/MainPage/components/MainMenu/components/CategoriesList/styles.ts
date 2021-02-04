import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { font, colors } = theme;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  align-items: center;
  background-color: white;
`;

export const Element = styled.div`
  font-size: ${font.size.xs};
  border-bottom: 2px solid white;

  :hover {
    color: ${colors.orange};
    border-bottom: 2px solid ${colors.orange};
  }
`;
