import styled from "@emotion/styled";

import { theme } from "assets/theme";

export { HeroImageWrapper, ResponsiveImage } from "pages/ItemPage/styles";

export { TextInfoContainer, Title } from "../PictureTitleRatioInfo/styles";

const { font, colors } = theme;

// export const Wrapper = styled.div`

// `;

export const SectionTitle = styled.p`
  text-align: left;
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  margin: 0;
`;

export const ItemTextInfo = styled.p`
  margin: 0;
  text-align: justify;
  font-size: ${font.size.sm};
  color: ${colors.gray_text};
  letter-spacing: 0.4px;
`;
