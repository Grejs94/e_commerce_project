import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./data";

export const groceriesSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    incrementValue: (state) => {
      if (state.value > 98) {
        return;
      }

      state.value = ++state.value;
    },
    decrementValue: (state) => {
      if (state.value < 1) {
        return;
      }

      state.value = --state.value;
    },
    setValue: (state, action) => {
      const payloadAsNumber = Number(action.payload);

      if (!payloadAsNumber) {
        return;
      }

      if (payloadAsNumber > 99 || payloadAsNumber < 0) {
        return;
      }

      state.value = payloadAsNumber;
    },
    fetchDataStarted: (state) => {
      state.dataStatus = "inProgress";
    },
    fetchDataSucceeded: (state) => {
      state.dataStatus = "succeeded";
    },
    fetchDataFailed: (state) => {
      state.dataStatus = "failed";
    },
  },
});

export const {
  incrementValue,
  decrementValue,
  setValue,
  fetchDataStarted,
  fetchDataSucceeded,
  fetchDataFailed,
} = groceriesSlice.actions;

export const selectExampleValue = (state: any) => state.example.value;

export default groceriesSlice.reducer;
