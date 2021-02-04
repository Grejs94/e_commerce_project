import styled from "@emotion/styled";
import PaperMaterial from "@material-ui/core/Paper";
import IconButtonMaterial from "@material-ui/core/IconButton";
import DividerMaterial from "@material-ui/core/Divider";
import InputBaseMaterial from "@material-ui/core/InputBase";
import SearchIconMaterial from "@material-ui/icons/Search";

import { theme } from "assets/theme";

const { colors } = theme;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Paper = styled(PaperMaterial)`
  display: flex;
  align-items: center;
  width: 300px;
`;

export const IconButton = styled(IconButtonMaterial)`
  && {
    padding: 5px;
  }
`;

export const Divider = styled(DividerMaterial)`
  && {
    height: 28px;
    margin: 4px;
  }
`;

export const InputBase = styled(InputBaseMaterial)`
  && {
    margin-left: 8px;
    flex: 1;
  }
`;

export const SearchIcon = styled(SearchIconMaterial)`
  color: ${colors.orange};
`;
