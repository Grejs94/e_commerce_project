import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchProductsCategories } from "features/products/index";
import { mainPageRoutes } from "assets";
import { MainMenu } from "components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(fetchProductsCategories());

  return (
    <div>
      <MainMenu propsVariant={"openDefaultVariantBar"} />
      {mainPageRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </div>
  );
};

export default MainPage;
