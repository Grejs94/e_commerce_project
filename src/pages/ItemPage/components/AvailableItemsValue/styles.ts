import styled from "@emotion/styled";

import { Button as ButtonMaterial } from "@material-ui/core";

import { theme } from "assets/theme";

const { font, colors } = theme;

export const Wrapper = styled.div`
  text-align: left;
  color: ${colors.gray_text};
`;

export const Text = styled.span`
  font-size: ${font.size.sm};
`;

export const AvailableItemsText = styled(Text)`
  margin-left: 7px;
`;

export const InputButtonsAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

export const Button = styled(ButtonMaterial)`
  && {
    border: 1px solid ${colors.gray_background_medium};
    min-width: 40px;
    height: 40px;
    font-size: ${font.size.xxxl};
  }
`;

export const Input = styled.input`
  text-align: center;
  border: 1px solid ${colors.gray_background_medium};
  width: 60px;
  height: 36px;
  border-radius: 4px;
  font-weight: ${font.weight.bold};
`;

export const ToBigValueMessageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;

  span {
    color: red;
    font-size: ${font.size.sm};
  }
`;
