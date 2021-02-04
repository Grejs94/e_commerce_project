import React from "react";

import { SearchInfo, Sorting, ProductsList } from "./components";

type Props = {};

const SearchContent: React.FC<Props> = () => {
  return (
    <div>
      <SearchInfo />
      <Sorting />
      <ProductsList />
    </div>
  );
};

export default SearchContent;
