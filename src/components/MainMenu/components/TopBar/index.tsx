import React, { useState, useEffect } from "react";

import * as Styles from "./styles";
import { CustomInput } from "./components/index";

type Props = {
  propsVariant: string;
};

const TopBar: React.FC<Props> = ({ propsVariant }) => {
  const [variant, setVariant] = useState("openDefaultVariantBar");

  useEffect(() => {
    setVariant(propsVariant);
  }, [propsVariant, setVariant]);

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
        <Styles.SearchVariantBar display={variant}>
          <Styles.ArrowBackIcon onClick={toggleVariantBar} />
          <CustomInput />
        </Styles.SearchVariantBar>
      )}
    </div>
  );
};

export default TopBar;
