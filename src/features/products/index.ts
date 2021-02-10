import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import Cookies from "js-cookie";

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
    setSearchElementStatusSucceededByCookies: (state) => {
      state.searchElementStatus = "succeeded";
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
    setUsingCookies: (state, action) => {
      const { itemsFound, search } = action.payload;

      state.itemsFound = itemsFound;
      state.searchElement = search;
      state.searchCategory = search;
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
  setUsingCookies,
  setSearchElementStatusSucceededByCookies,
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
    console.log(error);

    dispatch(fetchDataFailed());
  }
};

export const fetchSpecificCategory = (category: string) => async (
  dispatch: Dispatch
) => {
  dispatch(fetchSearchElementStatusStarted());
  try {
    const specificCategoryItems = await api.products.getSpecificCategory(
      category
    );

    const expandedItems = specificCategoryItems.map((item: Item) => {
      // add aditional data created randomly

      let supplyInfo = false;
      let smart = false;
      let greatSeller = false;
      let supplyTime = 0;
      let deliveryCost = 8.99;

      const supplyRand = Math.random() > 0.4;
      const smartRand = Math.random() > 0.4;
      const greatSellerRand = Math.random() > 0.4;
      const deliveryCostSmall = Math.random() > 0.4;
      const deliveryCostBig = Math.random() > 0.4;

      const addAdditionalRandomData = () => {
        if (supplyRand) {
          supplyInfo = true;
        } else {
          return;
        }

        if (smartRand) {
          smart = true;
        } else {
          return;
        }

        if (greatSellerRand) {
          greatSeller = true;
        } else {
          return;
        }

        if (supplyInfo) {
          const supplyTimeRand = Math.random() > 0.5;

          if (supplyTimeRand) {
            supplyTime = 1;
          } else {
            supplyTime = 2;
          }
        }

        if (deliveryCostSmall) {
          deliveryCost = 12.99;
        }

        if (deliveryCostBig) {
          deliveryCost = 16.99;
        }
      };
      addAdditionalRandomData();

      return {
        ...item,
        showButton: true,
        supplyInfo,
        supplyTime,
        smart,
        deliveryCost,
        greatSeller,
      };
    });

    // if I had not reduced the size, the cookie would not have been saved because it was too large (RFC 6265)
    // https://github.com/js-cookie/js-cookie#encoding
    const slicedItems = expandedItems.slice(0, 4);

    dispatch(setItemsFound(slicedItems));
    dispatch(setSearchElement(category));
    dispatch(setSearchCategory(category));

    // setCookies

    const itemsInJson = JSON.stringify(slicedItems);

    Cookies.set("searchElement", `${category}`);
    Cookies.set("itemsFound", `${itemsInJson}`);

    dispatch(fetchSearchElementStatusSucceeded());
  } catch (error) {
    console.log(error);

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
