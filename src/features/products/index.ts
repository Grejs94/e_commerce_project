import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

import api from "api";
import { Item } from "interfaces/index";

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

    const changedProducts = productsCategories.map((item: Item) => {
      // set random visible logic to: supply time, super seller and smart supply

      let supplyVisible = false;
      let smart = false;
      let greatSeller = false;

      const supplyRand = Math.random();
      const smartRand = Math.random();
      const greatSellerRand = Math.random();

      const setRandomElements = () => {
        if (supplyRand < 0.5) {
          supplyVisible = true;
        } else {
          return;
        }

        if (smartRand < 0.5) {
          smart = true;
        } else {
          return;
        }

        if (greatSellerRand < 0.5) {
          greatSeller = true;
        } else {
          return;
        }
      };
      setRandomElements();

      // set random supplyTime logic

      let supplyTime = 0;

      if (supplyVisible) {
        const supplyTimeRand = Math.random();

        if (supplyTimeRand < 0.5) {
          supplyTime = 1;
        } else {
          supplyTime = 2;
        }
      }

      return {
        ...item,
        showButton: true,
        supplyInfo: supplyVisible,
        supplyTime: supplyTime,
        smart,
        greatSeller,
      };
    });

    dispatch(setItemsFound(changedProducts));
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
