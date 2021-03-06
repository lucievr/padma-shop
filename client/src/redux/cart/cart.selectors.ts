import { createSelector } from 'reselect';
import { ApplicationState } from '../store';

const selectCart = (state: ApplicationState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => 
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + (cartItem.cartQty || 1),
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems
    .reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + ((cartItem.cartQty || 1) * cartItem.price),
      0
    )
    .toFixed(2)
);
