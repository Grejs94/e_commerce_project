import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { theme } from "assets/theme";

const { colors } = theme;

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        html,
   body {
          padding: 0;
          margin: 0;
          background: ${colors.white};
          min-height: 100%;
          font-family: Roboto, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
