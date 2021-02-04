import React from "react";

import * as Styles from "./styles";

type Props = {};

const SearchInfo: React.FC<Props> = () => {
  return (
    <Styles.Wrapper>
      <Styles.SearchingContents>SearchContent</Styles.SearchingContents>
      <Styles.OffersFound>(136 ofert)</Styles.OffersFound>
      <Styles.Category>
        Category -
        <Styles.CategoryColoredText> Odzież męska</Styles.CategoryColoredText>
      </Styles.Category>
    </Styles.Wrapper>
  );
};

export default SearchInfo;
