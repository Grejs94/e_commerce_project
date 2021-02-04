import React from "react";
import Loader from "react-loader-spinner";

import { theme } from "assets/theme";

const LoadingIndicator: React.FC = () => {
  const { colors } = theme;

  return (
    <Loader
      type="TailSpin"
      color={colors.orange}
      height={16}
      width={16}
      timeout={3000}
    />
  );
};

export default LoadingIndicator;
