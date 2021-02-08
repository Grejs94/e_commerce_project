import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { fetchSpecificCategory } from "features/products/index";
import {
  selectProductsCategories,
  selectProductsStatus,
} from "features/products/index";
import { LoadingIndicator } from "components";

import * as Styles from "./styles";

type Props = {};

const CategoriesList: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector(selectProductsCategories);
  const categoriesStatus = useSelector(selectProductsStatus);
  const data = categoriesStatus;

  const cookie = Cookies.get("searchElement");

  useEffect(() => {
    if (cookie) {
      dispatch(fetchSpecificCategory(cookie));
    }
  }, []);

  const fetchData = (fetchedCategory: string) => {
    Cookies.set("searchElement", `${fetchedCategory}`);
    dispatch(fetchSpecificCategory(fetchedCategory));
    // dispatch(selectSearchCategory(fetchedCategory));
  };

  if (data === "iddle" || data === "inProgress") {
    return <LoadingIndicator />;
  }

  if (data === "failed") {
    return <div>Sorry... We got server problems. Come back later</div>;
  }

  return (
    <Styles.Wrapper>
      {categoriesList.map((category: string) => (
        <Link
          key={category}
          to={`/search/${category}`}
          onClick={() => fetchData(category)}
        >
          <Styles.Element>{category}</Styles.Element>
        </Link>
      ))}
    </Styles.Wrapper>
  );
};

export default CategoriesList;
