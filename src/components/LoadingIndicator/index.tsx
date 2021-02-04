import React from "react";
import Loader from "react-loader-spinner";

import { theme } from "assets/theme";

const LoadingIndicator: React.FC = () => {
  const { colors } = theme;

  return (
    <Loader
      type="TailSpin"
      color={colors.orange}
      height={50}
      width={50}
      timeout={3000}
    />
  );
};

export default LoadingIndicator;
