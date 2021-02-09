import React from "react";
import Loader from "react-loader-spinner";

import { theme } from "assets/theme";

type props = {
  height?: number;
};

const LoadingIndicator: React.FC<props> = ({ height }) => {
  const { colors } = theme;

  return (
    <Loader
      type="TailSpin"
      color={colors.orange}
      height={height ? height : 16}
      width={16}
      timeout={3000}
    />
  );
};

export default LoadingIndicator;
