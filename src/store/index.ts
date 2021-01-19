import { configureStore } from "@reduxjs/toolkit";

import { example } from "features";

export default configureStore({
  reducer: {
    example,
  },
});
