import { FilterState } from "./FilterState";

const selectFilterModule = (state: { filter: FilterState }) => state.filter;

export const selectInputTitle = (state: { filter: FilterState }) =>
  selectFilterModule(state).title ?? "";
export const selectInputCinemaId = (state: { filter: FilterState }) =>
  selectFilterModule(state).cinemaId ?? "";
export const selectInputGenre = (state: { filter: FilterState }) =>
  selectFilterModule(state).genre ?? "";
