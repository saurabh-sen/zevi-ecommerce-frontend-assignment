import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IResultsData } from "../../components/ResultContainer/Results";
// import { searchResultsData } from "../../data/searchResultsData";

export interface IPriceRange {
  min: number;
  max: number;
}

export interface IPriceRangeAction {
  id: number;
  checked: boolean;
}

export interface IRatingAction {
  rating: number;
  checked: boolean;
}

export interface IBrandAction {
  id: number;
  checked: boolean;
}

export interface ISearchState {
  showSuggestions: boolean;
  searchResults: IResultsData[];
  filteredResults: IResultsData[];
  brandFilter: number[];
  priceRangeFilter: number[];
  ratingFilter: number[];
  searchQuery: string;
}

const initialState: ISearchState = {
  showSuggestions: false,
  searchResults: [],
  filteredResults: [],
  brandFilter: [],
  priceRangeFilter: [],
  ratingFilter: [],
  searchQuery: "",
};

// filter the results based on the filters applied
const helperFilter = (
  result: IResultsData,
  brandFilter: number[],
  priceRangeFilter: number[],
  ratingFilter: number[],
  searchQuery: string
) => {
  let resultPriceFilter = false;
  let resultBrandFilter = false;
  let resultRatingFilter = false;
  let resultSearchFilter = false;
  // check if the price range of the result is in the price range filter
  // create a temp array of price range from priceRangeFilter(ids)
  const priceRangeFilterTemp: IPriceRange[] = [];
  priceRangeFilter.forEach((priceRange) => {
    switch (priceRange) {
      case 1:
        priceRangeFilterTemp.push({ min: 0, max: 100 });
        break;
      case 2:
        priceRangeFilterTemp.push({ min: 1000, max: 3000 });
        break;
      default:
        break;
    }
  });
  if (priceRangeFilter.length === 0) resultPriceFilter = true;
  else priceRangeFilterTemp.forEach((priceRange) => {
      if (result.selling >= priceRange.min && result.selling <= priceRange.max)
        resultPriceFilter = true;
    });

  // check if the brand of the result is in the brand filter
  // create a temp array of brand from brandFilter(ids)
  const brandFilterTemp: string[] = [];
  brandFilter.forEach((brand) => {
    switch (brand) {
      case 1:
        brandFilterTemp.push("Mango");
        break;
      case 2:
        brandFilterTemp.push("H&M");
        break;
      default:
        break;
    }
  });
  if (brandFilter.length === 0) resultBrandFilter = true;
  else
    brandFilterTemp.forEach((brand) => {
      if (result.brand === brand) resultBrandFilter = true;
    });

  // check if the rating of the result is in the rating filter
  if (ratingFilter.length === 0) resultRatingFilter = true;
  else
    ratingFilter.forEach((rating) => {
      if (result.rating === rating) resultRatingFilter = true;
    });

    // check if the search query is in the result
    if (searchQuery === "") resultSearchFilter = true;
    else if (result.title.toLowerCase().includes(searchQuery.toLowerCase())) resultSearchFilter = true;

  return resultPriceFilter && resultBrandFilter && resultRatingFilter && resultSearchFilter;
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<IResultsData[]>) => {
      state.searchResults = action.payload;
      state.filteredResults = action.payload;
    },
    setShowSuggestions: (state, action: PayloadAction<boolean>) => {
      state.showSuggestions = action.payload;
    },
    setfilteredResults: (state, action: PayloadAction<IResultsData[]>) => {
      state.filteredResults = action.payload;
    },
    handleBrandFilter: (state, action: PayloadAction<IBrandAction>) => {
      if (action.payload.checked) state.brandFilter.push(action.payload.id);
      else
        state.brandFilter = state.brandFilter.filter(
          (brand) => brand !== action.payload.id
        );
      state.filteredResults = state.searchResults.filter((result) => helperFilter(result, state.brandFilter, state.priceRangeFilter, state.ratingFilter, state.searchQuery));
    },
    handlePriceRangeFilter: (
      state,
      action: PayloadAction<IPriceRangeAction>
    ) => {
      // if checked is true, then add the price range to priceRangeFilter else remove it
      if (action.payload.checked)
        state.priceRangeFilter.push(action.payload.id);
      else
        state.priceRangeFilter = state.priceRangeFilter.filter(
          (priceRange) => priceRange !== action.payload.id
        );
      state.filteredResults = state.searchResults.filter((result) =>
        helperFilter(
          result,
          state.brandFilter,
          state.priceRangeFilter,
          state.ratingFilter,
          state.searchQuery
        )
      );
    },
    handleRatingFilter: (state, action: PayloadAction<IRatingAction>) => {
      // if checked is true, then add the rating to ratingFilter else remove it
      if (action.payload.checked) state.ratingFilter.push(action.payload.rating);
      else
        state.ratingFilter = state.ratingFilter.filter(
          (rating) => rating !== action.payload.rating
        );
      state.filteredResults = state.searchResults.filter((result) =>
        helperFilter(
          result,
          state.brandFilter,
          state.priceRangeFilter,
          state.ratingFilter,
          state.searchQuery,
        )
      );
    },
    handleSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredResults = state.searchResults.filter((result) =>
        helperFilter( result, state.brandFilter, state.priceRangeFilter, state.ratingFilter, state.searchQuery)
      );
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setShowSuggestions,
  setfilteredResults,
  handleBrandFilter,
  handlePriceRangeFilter,
  handleRatingFilter,
  handleSearchFilter,
  setSearchResults,
} = SearchSlice.actions;

export default SearchSlice.reducer;
