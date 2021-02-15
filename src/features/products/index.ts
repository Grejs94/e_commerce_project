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
    setDisplayedItem: (state, action) => {
      state.displayedItem = action.payload;
    },
    setDisplayedItemFromCookie: (state, action) => {
      state.displayedItem = action.payload;
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
  setDisplayedItem,
  setDisplayedItemFromCookie,
} = groceriesSlice.actions;

export const fetchProductsCategories = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataStarted());
  try {
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

      function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const randomBoolean = () => {
        if (getRandomIntInclusive(0, 1) === 1) {
          return true;
        } else {
          return false;
        }
      };

      const intigerValueAsString = getRandomIntInclusive(2, 4).toString();
      const restValueAsString = getRandomIntInclusive(0, 99).toString();

      const generateQualityRatio = (variant: string) => {
        if (variant === "string") {
          const qualityRatio = `${intigerValueAsString},${
            restValueAsString.length === 1
              ? `0${restValueAsString}`
              : restValueAsString
          }`;

          return qualityRatio;
        } else if (variant === "number") {
          const ratioAsNumber = Number(
            `${intigerValueAsString}.${restValueAsString}`
          );

          return ratioAsNumber;
        }
        // get number between min max (include max)
      };

      // I created this fn because I wanna be sure that AssessmentNumber is smaller than peopleWhoBought
      const generateAssessmentNumber = (peopleWhoBought: number) => {
        const lengthOfPeopleBought = peopleWhoBought.toString().length;

        if (lengthOfPeopleBought === 1) {
          if (peopleWhoBought < 5) {
            return peopleWhoBought;
          }

          return peopleWhoBought - getRandomIntInclusive(0, 4);
        }

        if (lengthOfPeopleBought === 2) {
          return peopleWhoBought - getRandomIntInclusive(0, 9);
        }

        if (lengthOfPeopleBought === 3) {
          return peopleWhoBought - getRandomIntInclusive(0, 99);
        }
      };

      // Item property
      const supplyInfo = randomBoolean();
      const smart = randomBoolean();
      const greatSeller = randomBoolean();
      const supplyTime = getRandomIntInclusive(0, 2);
      const deliveryCost = 8.99;
      const peopleWhoBought = getRandomIntInclusive(0, 300);
      const qualityRatio = generateQualityRatio("string");
      const qualityRatioAsNumber = generateQualityRatio("number");
      const assessmentNumber = generateAssessmentNumber(peopleWhoBought);
      const availableItemsToBought = getRandomIntInclusive(0, 200);

      return {
        ...item,
        showButton: true,
        supplyInfo,
        supplyTime,
        smart,
        deliveryCost,
        greatSeller,
        peopleWhoBought,
        qualityRatio,
        assessmentNumber,
        availableItemsToBought,
        qualityRatioAsNumber,
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

export const selectDisplayedItem = (state: any) => state.products.displayedItem;

export default groceriesSlice.reducer;
