import filterInitialState from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilterValue } = filterSlice.actions;
