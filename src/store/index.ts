import { configureStore } from "@reduxjs/toolkit";

import { products } from "features";

export default configureStore({
  reducer: {
    products,
  },
});
