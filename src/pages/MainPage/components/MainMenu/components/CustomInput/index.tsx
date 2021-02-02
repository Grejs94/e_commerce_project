import React from "react";

import SearchIcon from "@material-ui/icons/Search";

import * as Styles from "./styles";

export default function CustomizedInputBase() {
  return (
    <Styles.Paper component="form">
      <Styles.IconButton type="submit" aria-label="search">
        <SearchIcon />
      </Styles.IconButton>
      <Styles.Divider orientation="vertical" />
      <Styles.InputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search products" }}
      />
    </Styles.Paper>
  );
}
