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

      const genereteDegree = (assessmentNumber: number) => {
        const sum = assessmentNumber;
        const degree5 = getRandomIntInclusive(0, sum);
        const rest1 = sum - degree5;
        if (rest1 === 0) {
          return {
            sum: sum,
            degrees: [
              {
                numberRatingsIssued: degree5,
                numbering: 5,
              },
              {
                numberRatingsIssued: 0,
                numbering: 4,
              },
              {
                numberRatingsIssued: 0,
                numbering: 3,
              },
              {
                numberRatingsIssued: 0,
                numbering: 2,
              },
              {
                numberRatingsIssued: 0,
                numbering: 1,
              },
            ],
          };
        }

        const degree4 = getRandomIntInclusive(0, rest1);
        const rest2 = rest1 - degree4;
        if (rest2 === 0) {
          return {
            sum: sum,
            degrees: [
              {
                numberRatingsIssued: degree5,
                numbering: 5,
              },
              {
                numberRatingsIssued: degree4,
                numbering: 4,
              },
              {
                numberRatingsIssued: 0,
                numbering: 3,
              },
              {
                numberRatingsIssued: 0,
                numbering: 2,
              },
              {
                numberRatingsIssued: 0,
                numbering: 1,
              },
            ],
          };
        }

        const degree3 = getRandomIntInclusive(0, rest2);
        const rest3 = rest2 - degree3;
        if (rest3 === 0) {
          return {
            sum: sum,
            degrees: [
              {
                numberRatingsIssued: degree5,
                numbering: 5,
              },
              {
                numberRatingsIssued: degree4,
                numbering: 4,
              },
              {
                numberRatingsIssued: degree3,
                numbering: 3,
              },
              {
                numberRatingsIssued: 0,
                numbering: 2,
              },
              {
                numberRatingsIssued: 0,
                numbering: 1,
              },
            ],
          };
        }

        const degree2 = getRandomIntInclusive(0, rest3);
        const rest4 = rest3 - degree2;
        if (rest4 === 0) {
          return {
            sum: sum,
            degrees: [
              {
                numberRatingsIssued: degree5,
                numbering: 5,
              },
              {
                numberRatingsIssued: degree4,
                numbering: 4,
              },
              {
                numberRatingsIssued: degree3,
                numbering: 3,
              },
              {
                numberRatingsIssued: degree2,
                numbering: 2,
              },
              {
                numberRatingsIssued: 0,
                numbering: 1,
              },
            ],
          };
        }

        const degree1 = rest4;
        return {
          sum: sum,
          degrees: [
            {
              numberRatingsIssued: degree5,
              numbering: 5,
            },
            {
              numberRatingsIssued: degree4,
              numbering: 4,
            },
            {
              numberRatingsIssued: degree3,
              numbering: 3,
            },
            {
              numberRatingsIssued: degree2,
              numbering: 2,
            },
            {
              numberRatingsIssued: degree1,
              numbering: 1,
            },
          ],
        };
      };

      type Idegees = {
        numberRatingsIssued: number;
        numbering: number;
      };

      type IdegreeExpanded = {
        sum: number;
        degrees: Array<Idegees>;
      };

      const expandDegree = (arr: IdegreeExpanded) => {
        const newArray = arr.degrees.map((degree) => {
          const opinonPercentage = Math.floor(
            (degree.numberRatingsIssued * 100) / arr.sum
          );

          return {
            ...degree,
            opinionPercentage: opinonPercentage,
          };
        });

        const averageGrande = () => {
          const averageGrande = (
            arr.degrees.reduce(
              (acc, item) => acc + item.numberRatingsIssued * item.numbering,
              0
            ) / arr.sum
          ).toFixed(2);

          const intiger = averageGrande.slice(0, 1);

          let decimal = averageGrande.slice(2);

          if (decimal.length === 0) {
            decimal = "00";
          }

          if (decimal.length === 1) {
            decimal = `${decimal}0`;
          }

          const degreesInWords = (number: number) => {
            if (number > 4.4) {
              return "Rewelacyjny";
            }

            if (number > 4) {
              return "Dobry";
            }

            if (number > 3) {
              return "Przecięntny";
            }

            if (number > 2) {
              return "Słaby";
            }

            return "Tragiczny";
          };

          return {
            asNumber: parseFloat(averageGrande),
            intAsString: intiger,
            decimalAsString: decimal,
            inWords: degreesInWords(parseFloat(averageGrande)),
          };
        };

        return {
          ...arr,
          degrees: newArray,
          averageGrande: averageGrande(),
        };
      };

      // Item property
      const supplyInfo = randomBoolean();
      const smart = randomBoolean();
      const greatSeller = randomBoolean();
      const supplyTime = supplyInfo ? getRandomIntInclusive(1, 2) : null;
      const deliveryCost = 8.99;
      const peopleWhoBought = getRandomIntInclusive(0, 300);
      const availableItemsToBought = getRandomIntInclusive(0, 200);
      const degree = genereteDegree(getRandomIntInclusive(0, 40));
      const degreeExpanded = expandDegree(degree);

      return {
        ...item,
        showButton: true,
        supplyInfo,
        supplyTime,
        smart,
        deliveryCost,
        greatSeller,
        peopleWhoBought,
        availableItemsToBought,
        degree: degreeExpanded,
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
