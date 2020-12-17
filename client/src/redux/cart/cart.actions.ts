import { action, Action } from 'typesafe-actions';
import { CartActionTypes, CartItem } from './cart.types';

export const addItem = (item: CartItem) =>
  action(CartActionTypes.ADD_ITEM, item);

export const removeItem = (item: CartItem) =>
  action(CartActionTypes.REMOVE_ITEM, item);

export const clearItemFromCart = (item: CartItem) =>
  action(CartActionTypes.CLEAR_ITEM_FROM_CART, item);

export const clearCart = () => action(CartActionTypes.CLEAR_CART);

export type Dispatch = (action: Action) => void;
