import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { fetchProductsCategories } from "features/products/index";
import { mainPageRoutes } from "assets";
import { MainMenu } from "components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCategories());
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
