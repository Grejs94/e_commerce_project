import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { font } = theme;

export const Wrapper = styled.div`
  text-align: left;
`;

export const SectionTitle = styled.p`
  margin: 0;
  font-size: ${font.size.xl};
`;

export const BFContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
