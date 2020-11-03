import UserActionTypes from './user.types';
import { addItemToFavourites, removeItemFromFavourites } from './user.utils';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGNOUT_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.ADD_TO_FAVOURITES:
      return {
        ...state,
        currentUser: {
          ...state.currentUser, favourites: addItemToFavourites(state.currentUser, action.payload),
        }
      };
      case UserActionTypes.REMOVE_FROM_FAVOURITES:
        return {
          ...state,
          currentUser: {
            ...state.currentUser, favourites: removeItemFromFavourites(state.currentUser, action.payload),
          }
        };
    default:
      return state;
  }
};

export default userReducer;
