import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

import {
  selectDisplayedItem,
  setDisplayedItemFromCookie,
} from "features/products/index";
import { LoadingIndicator } from "components";

type Props = {};

const ItemPage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectDisplayedItem);

  const itemFromCookie = Cookies.get("displayedItem");
  let parsedItem: any;

  if (itemFromCookie) {
    parsedItem = JSON.parse(itemFromCookie);
  }

  console.log(item);

  useEffect(() => {
    if (parsedItem) {
      dispatch(setDisplayedItemFromCookie(parsedItem));
    }
  }, []);

  if (item === "") {
    return <LoadingIndicator />;
  }

  // displayedItem - redux state

  return <div>ItemPage</div>;
};

export default ItemPage;
