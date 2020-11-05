import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

export const selectWindowDimensions = createSelector(
  [selectApp],
  (app) => app.windowDimensions
);

export const selectWindowWidth = createSelector(
  [selectWindowDimensions],
  (windowDimensions) => (windowDimensions ? windowDimensions.width : null)
);
