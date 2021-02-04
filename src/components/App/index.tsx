import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { mainRoutes } from "assets";

import { Wrapper } from "./styles";

const App: React.FC = () => {
  return (
    <Router>
      <Wrapper>
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
