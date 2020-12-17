import { ShopItem } from '../shop/shop.types';

export interface CartItem extends ShopItem {
  cartQty?: number | 1;
}
export interface cartState {
  readonly cartItems: CartItem[];
}

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}
