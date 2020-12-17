import { Reducer } from 'redux';
import { UserActionTypes, userState } from './user.types';

const INITIAL_STATE: userState = {
  currentUser: null,
  error: null,
};

const userReducer: Reducer<userState> = (state = INITIAL_STATE, action) => {
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
      };
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGNOUT_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
