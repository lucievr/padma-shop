import { createSelector } from 'reselect';
import { ApplicationState } from '../store';

const selectUser = (state: ApplicationState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserFavourites = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.favourites : null)
);
