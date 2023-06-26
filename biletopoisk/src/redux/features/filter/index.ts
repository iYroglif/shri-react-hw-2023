import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./FilterState";

const initialState: FilterState = {};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setInputTitle: (state, { payload }) => {
      state.title = payload;
    },
    setInputCinemaId: (state, { payload }) => {
      state.cinemaId = payload;
    },
    setInputGenre: (state, { payload }) => {
      state.genre = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
