import { createSelector } from "reselect";
import { CartState } from "./CartState";

const selectCartModule = (state: { cart: CartState }) => state.cart;

export const selectProductsAmount = createSelector([selectCartModule], (cart) =>
  Object.values(cart).reduce((sum, amount) => sum + amount, 0)
);
export const selectProductAmount = createSelector(
  [selectCartModule, (_, id) => id],
  (cart, id) => cart[id] ?? 0
);
export const selectProductsIds = createSelector([selectCartModule], (cart) => Object.keys(cart));
