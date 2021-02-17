import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

import {
  selectDisplayedItem,
  setDisplayedItemFromCookie,
} from "features/products/index";
import { LoadingIndicator } from "components";

import * as Styles from "./styles";
import {
  PictureTitleRatioInfo,
  PricePeopleBought,
  SupplyIconsAndInfo,
  Description,
  AvailableItemsValue,
} from "./components";

type Props = {};

const ItemPage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectDisplayedItem);

  const itemFromCookie = Cookies.get("displayedItem");
  let parsedItem: any;

  if (itemFromCookie) {
    parsedItem = JSON.parse(itemFromCookie);
  }

  useEffect(() => {
    if (parsedItem) {
      dispatch(setDisplayedItemFromCookie(parsedItem));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (item === "") {
    return <LoadingIndicator />;
  }

  return (
    <Styles.Wrapper>
      <PictureTitleRatioInfo item={item} />
      <Styles.Hr />
      <PricePeopleBought item={item} />
      <Styles.Hr />
      <AvailableItemsValue item={item} />
      <Styles.Hr />
      <SupplyIconsAndInfo item={item} />
      <Styles.Hr />
      <Description item={item} />
    </Styles.Wrapper>
  );
};

export default ItemPage;
