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
    fetchSearchElementStatusStarted: (state) => {
      state.searchElementStatus = "inProgress";
    },
    fetchSearchElementStatusSucceeded: (state) => {
      state.searchElementStatus = "succeeded";
    },
    fetchSearchElementStatusFailed: (state) => {
      state.searchElementStatus = "failed";
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsCategories: (state, action) => {
      state.categories = action.payload;
    },
    setItemsFound: (state, action) => {
      state.itemsFound = action.payload;
    },
    setSearchElement: (state, action) => {
      state.searchElement = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
});

export const {
  fetchDataStarted,
  fetchDataSucceeded,
  fetchDataFailed,
  fetchSearchElementStatusStarted,
  fetchSearchElementStatusSucceeded,
  fetchSearchElementStatusFailed,
  setProducts,
  setProductsCategories,
  setItemsFound,
  setSearchElement,
  setSearchCategory,
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

export const fetchSpecificCategory = (category: string) => async (
  dispatch: Dispatch
) => {
  dispatch(fetchSearchElementStatusStarted());
  try {
    const productsCategories = await api.products.getSpecificCategory(category);
    dispatch(setItemsFound(productsCategories));
    dispatch(setSearchElement(category));
    dispatch(setSearchCategory(category));

    dispatch(fetchSearchElementStatusSucceeded());
  } catch (error) {
    dispatch(fetchSearchElementStatusFailed());
  }
};

export const selectProductsStatus = (state: any) => state.products.dataStatus;

export const selectProductsCategories = (state: any) =>
  state.products.categories;

export const selectSearchElementStatus = (state: any) =>
  state.products.searchElementStatus;

export const selectSearchElement = (state: any) => state.products.searchElement;

export const selectSearchCategory = (state: any) =>
  state.products.searchCategory;

export const selectItemsFound = (state: any) => state.products.itemsFound;

export default groceriesSlice.reducer;
