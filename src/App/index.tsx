import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import {
  fetchProductsCategories,
  setUsingCookies,
  setSearchElementStatusSucceededByCookies,
} from "features/products/index";
import { mainRoutes } from "assets";

import { MainMenu } from "./components/index";
import { Wrapper } from "./styles";

const App: React.FC = () => {
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
    <Router>
      <Wrapper>
        <MainMenu propsVariant={"openDefaultVariantBar"} />
        <Switch>
          {mainRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
