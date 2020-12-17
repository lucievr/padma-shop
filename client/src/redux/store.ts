import { combineReducers } from "redux";
import { all, call } from 'redux-saga/effects';

import { cartState } from './cart/cart.types';
import { directoryState } from './directory/directory.types';
import { userState } from './user/user.types';
import { appState } from './app/app.types';
import { shopState } from './shop/shop.types';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import appReducer from './app/app.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

export interface ApplicationState {
  cart: cartState;
  directory: directoryState;
  shop: shopState;
  user: userState;
  app: appState;
}

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
