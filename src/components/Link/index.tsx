import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: any;
};

const LinkComponent: React.FC<Props> = ({ to, children }) => {
  return (
    <Link style={{ textDecoration: "none", color: "black" }} to={to}>
      {children}
    </Link>
  );
};

export default LinkComponent;
