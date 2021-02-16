import styled from "@emotion/styled";

import { SpaceBetweenContainer as SpaceBetweenContainerImorted } from "pages/ItemPage/styles";

import { theme } from "assets/theme";

const { colors, font } = theme;

export const SpaceBetweenContainer = styled(SpaceBetweenContainerImorted)`
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const LeftSiteContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  p {
    text-align: left;
    font-size: ${font.size.sm};
    margin: 0;
  }
`;

export const ExtraText = styled.p`
  color: ${colors.gray_text};

  && {
    margin-top: 2px;
  }
`;

export const WordLinkText = styled.span`
  color: ${colors.blue_link};
`;
