import { CartItem } from './cart.types';

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, cartQty: (cartItem.cartQty || 1) + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, cartQty: 1 }];
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.cartQty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, cartQty: (cartItem.cartQty || 2) - 1 }
      : cartItem
  );
};
