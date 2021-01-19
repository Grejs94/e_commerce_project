import React from "react";

import * as Styles from "./styles";

type Props = {
  handleClick?: any;
  variant: any;
  children: string;
  color: any;
  customVariant: "short" | "regular";
};

const Button: React.FC<Props> = ({
  children,
  customVariant,
  handleClick = () => {},
  ...rest
}) => {
  const components = {
    short: (
      <Styles.ShortButton onClick={handleClick} {...rest}>
        {children}
      </Styles.ShortButton>
    ),
    regular: (
      <Styles.RegularButton onClick={handleClick} {...rest}>
        {children}
      </Styles.RegularButton>
    ),
  };

  return components[customVariant];
};

export default Button;
