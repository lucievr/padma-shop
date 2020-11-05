import AppActionTypes from './app.types';
import { getWindowDimensions } from './app.utils';

const INITIAL_STATE = {
  windowDimensions: getWindowDimensions(),
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AppActionTypes.SET_WINDOW_DIMENSIONS:
      return {
        ...state,
        windowDimensions: getWindowDimensions(),
      }
    default:
      return state;
  }
}

export default appReducer;
