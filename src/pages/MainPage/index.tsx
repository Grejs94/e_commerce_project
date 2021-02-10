import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import {
  fetchProductsCategories,
  setUsingCookies,
  setSearchElementStatusSucceededByCookies,
} from "features/products/index";
import { mainPageRoutes } from "assets";
import { MainMenu } from "components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const cookieSearchElement = Cookies.get("searchElement");
  const cookieItemsFound = Cookies.get("itemsFound");
  let parsedItems: any;

  if (cookieItemsFound && cookieSearchElement) {
    parsedItems = JSON.parse(cookieItemsFound);
  }

  useEffect(() => {
    dispatch(fetchProductsCategories());

    if (parsedItems) {
      dispatch(
        setUsingCookies({
          itemsFound: parsedItems,
          search: cookieSearchElement,
        })
      );
      dispatch(setSearchElementStatusSucceededByCookies());
    }
  }, []);

  return (
    <div>
      <MainMenu propsVariant={"openDefaultVariantBar"} />
      <Switch>
        {mainPageRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
};

export default MainPage;
