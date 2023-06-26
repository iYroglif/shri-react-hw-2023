import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";
import { reviewApi } from "./services/reviewApi";
import { cinemaApi } from "./services/cinemaApi";
import { filterReducer } from "./features/filter";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware,
      reviewApi.middleware,
      cinemaApi.middleware,
    ]),
});
