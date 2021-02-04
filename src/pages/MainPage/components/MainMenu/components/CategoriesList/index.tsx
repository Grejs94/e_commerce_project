import React from "react";
import { useSelector } from "react-redux";

import {
  selectProductsCategories,
  selectProductsStatus,
} from "features/products/index";
import { LoadingIndicator } from "components";

import * as Styles from "./styles";

type Props = {};

const CategoriesList: React.FC<Props> = () => {
  const categoriesList = useSelector(selectProductsCategories);
  const categoriesStatus = useSelector(selectProductsStatus);

  const data = categoriesStatus;

  if (data === "iddle" || data === "inProgress") {
    return <LoadingIndicator />;
  }

  if (data === "failed") {
    return <div>"Sorry... We got server problems. Come back later"</div>;
  }

  return (
    <Styles.Wrapper>
      {categoriesList.map((category: string) => (
        <Styles.Element key={category}>{category}</Styles.Element>
      ))}
    </Styles.Wrapper>
  );
};

export default CategoriesList;
