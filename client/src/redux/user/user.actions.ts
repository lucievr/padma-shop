import { action } from 'typesafe-actions';
import { UserActionTypes, User } from './user.types';

export interface UserCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface UserSignedUp {
  user: User;
  additionalData: {
    displayName: string;
  };
}

export const googleSignInStart = () =>
  action(UserActionTypes.GOOGLE_SIGNIN_START);

export const emailSignInStart = (emailAndPassword: UserCredentials) =>
  action(UserActionTypes.EMAIL_SIGNIN_START, emailAndPassword);

export const signInSuccess = (user: User) =>
  action(UserActionTypes.SIGNIN_SUCCESS, user);

export const signInFailure = (error: string) =>
  action(UserActionTypes.SIGNIN_FAILURE, error);

export const checkUserSession = () =>
  action(UserActionTypes.CHECK_USER_SESSION);

export const signOutStart = () => action(UserActionTypes.SIGNOUT_START);

export const signOutSuccess = () => action(UserActionTypes.SIGNOUT_SUCCESS);

export const signOutFailure = (error: string) =>
  action(UserActionTypes.SIGNOUT_FAILURE, error);

export const signUpStart = (userCredentials: UserCredentials) =>
  action(UserActionTypes.SIGNUP_START, userCredentials);

export const signUpSuccess = ({ user, additionalData }: UserSignedUp) =>
  action(UserActionTypes.SIGNUP_SUCCESS, { user, additionalData });

export const signUpFailure = (error: string) =>
  action(UserActionTypes.SIGNUP_FAILURE, error);

export const updateUser = (updatedUser: User) =>
  action(UserActionTypes.UPDATE_USER, updatedUser);
