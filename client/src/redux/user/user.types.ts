export interface User {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
  favourites?: number[];
}

export interface userState {
  readonly currentUser: User | null;
  readonly error: string | null;
}

export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  GOOGLE_SIGNIN_START = 'GOOGLE_SIGNIN_START',
  EMAIL_SIGNIN_START ='EMAIL_SIGNIN_START',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE = 'SIGNIN_FAILURE',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  SIGNOUT_START = 'SIGNOUT_START',
  SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS',
  SIGNOUT_FAILURE = 'SIGNOUT_FAILURE',
  SIGNUP_START = 'SIGNUP_START',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'SIGNUP_FAILURE',
  UPDATE_USER = 'UPDATE_USER',
};
