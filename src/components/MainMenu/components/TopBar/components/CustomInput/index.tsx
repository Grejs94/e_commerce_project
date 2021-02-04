import React from "react";

import * as Styles from "./styles";

export default function CustomizedInputBase() {
  return (
    <Styles.Wrapper>
      <Styles.Paper component="form">
        <Styles.IconButton type="submit" aria-label="search">
          <Styles.SearchIcon />
        </Styles.IconButton>
        <Styles.Divider orientation="vertical" />
        <Styles.InputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search products" }}
        />
      </Styles.Paper>
    </Styles.Wrapper>
  );
}
