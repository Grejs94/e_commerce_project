import React from "react";
import { useSelector } from "react-redux";

import { selectSearchElementStatus } from "features/products/index";
import { LoadingIndicator } from "components";

import { SearchInfo, Sorting, ProductsList } from "./components";

type Props = {};

const SearchPage: React.FC<Props> = () => {
  const data = useSelector(selectSearchElementStatus);

  if (data === "iddle" || data === "inProgress") {
    return <LoadingIndicator />;
  }

  if (data === "failed") {
    return <div>Sorry... We got server problems. Come back later</div>;
  }

  return (
    <div>
      <SearchInfo />
      <Sorting />
      <ProductsList />
    </div>
  );
};

export default SearchPage;
