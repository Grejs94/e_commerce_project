import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import { CustomInput } from "./components";
import * as Styles from "./styles";

type Props = {};

const MainMenu: React.FC<Props> = () => {
  const [variant, setVariant] = useState("openDefaultVariantBar");

  const toggleVariantBar = () => {
    if (variant === "openDefaultVariantBar") {
      setVariant("openSearchVariantBar");
    } else {
      setVariant("openDefaultVariantBar");
    }
  };

  return (
    <Styles.Wrapper>
      <Styles.DefaultVariantBar display={variant}>
        <div>
          <Styles.Title>allegro</Styles.Title>
        </div>
        <div>
          <Styles.SearchIcon onClick={toggleVariantBar} />
          <Styles.ShoppingCartIcon />
        </div>
      </Styles.DefaultVariantBar>
      <Styles.SearchVariantBar display={variant}>
        <Styles.ArrowBackIcon onClick={toggleVariantBar} />
        <CustomInput />
      </Styles.SearchVariantBar>
      MainMenu
    </Styles.Wrapper>
  );
};

export default MainMenu;
