import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  showSuggestions: boolean;
}

const initialState: SearchState = {
  showSuggestions: false,
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setShowSuggestions: (state, action: PayloadAction<boolean>) => {
      state.showSuggestions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowSuggestions } = SearchSlice.actions;

export default SearchSlice.reducer;
