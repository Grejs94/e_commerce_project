import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

import api from "api";

import { initialState } from "./data";

export const groceriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchDataStarted: (state) => {
      state.dataStatus = "inProgress";
    },
    fetchDataSucceeded: (state) => {
      state.dataStatus = "succeeded";
    },
    fetchDataFailed: (state) => {
      state.dataStatus = "failed";
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  fetchDataStarted,
  fetchDataSucceeded,
  fetchDataFailed,
  setProducts,
  setProductsCategories,
} = groceriesSlice.actions;

export const fetchProductsCategories = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataStarted());
  try {
    // const products = await api.products.getProducts();
    // dispatch(setProducts(products));

    const productsCategories = await api.products.getProductsCategories();
    dispatch(setProductsCategories(productsCategories));

    dispatch(fetchDataSucceeded());
  } catch (error) {
    dispatch(fetchDataFailed());
  }
};

export const selectProductsStatus = (state: any) => state.products.dataStatus;

export const selectProductsCategories = (state: any) =>
  state.products.categories;

export default groceriesSlice.reducer;
