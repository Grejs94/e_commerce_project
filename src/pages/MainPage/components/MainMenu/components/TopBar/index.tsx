import React, { useState } from "react";

import * as Styles from "./styles";
import { CustomInput } from "./components/index";

const TopBar: React.FC = () => {
  const [variant, setVariant] = useState("openDefaultVariantBar");

  const toggleVariantBar = () => {
    if (variant === "openDefaultVariantBar") {
      setVariant("openSearchVariantBar");
    } else {
      setVariant("openDefaultVariantBar");
    }
  };

  return (
    <div>
      {variant === "openDefaultVariantBar" ? (
        <Styles.DefaultVariantBar display={variant}>
          <div>
            <Styles.Title>allegro</Styles.Title>
          </div>
          <div>
            <Styles.SearchIcon onClick={toggleVariantBar} />
            <Styles.ShoppingCartIcon />
          </div>
        </Styles.DefaultVariantBar>
      ) : (
        <div>
          <Styles.SearchVariantBar display={variant}>
            <Styles.ArrowBackIcon onClick={toggleVariantBar} />
            <CustomInput />
          </Styles.SearchVariantBar>
        </div>
      )}
    </div>
  );
};

export default TopBar;
