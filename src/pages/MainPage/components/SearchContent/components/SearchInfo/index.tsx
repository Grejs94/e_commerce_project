import React from "react";
import { useSelector } from "react-redux";

import { LoadingIndicator } from "components";

import {
  selectSearchElement,
  selectSearchCategory,
  selectItemsFound,
} from "features/products/index";

import * as Styles from "./styles";

type Props = {};

const SearchInfo: React.FC<Props> = () => {
  const searchElement = useSelector(selectSearchElement);
  const searchCategory = useSelector(selectSearchCategory);
  const elements = useSelector(selectItemsFound);

  console.log(elements);

  return (
    <Styles.Wrapper>
      <Styles.SearchingContents>{searchElement}</Styles.SearchingContents>
      <Styles.OffersFound>{`(${elements.length} items)`}</Styles.OffersFound>
      <Styles.Category>
        {`Category - `}
        {searchCategory ? (
          <Styles.CategoryColoredText>
            {searchCategory}
          </Styles.CategoryColoredText>
        ) : (
          <LoadingIndicator />
        )}
      </Styles.Category>
    </Styles.Wrapper>
  );
};

export default SearchInfo;
