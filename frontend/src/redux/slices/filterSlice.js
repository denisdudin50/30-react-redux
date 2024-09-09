import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFavorit: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // You can mutate state thanks to Immer library
      state.title = action.payload;

      // You can also return new state as usually // It's a traditional way
      // return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorit = !state.onlyFavorit;
    },

    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorit;
export default filterSlice.reducer;
