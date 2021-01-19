import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        html,
   body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
