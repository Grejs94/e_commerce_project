import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { GlobalStyles } from "utils";

import App from "./components/App";
import store from "store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
