import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: any;
  handleclick?:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined;
};

const LinkComponent: React.FC<Props> = ({
  to,
  children,
  handleclick,
  ...rest
}) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={to}
      {...rest}
      onClick={handleclick}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
