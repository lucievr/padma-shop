import { createSelector } from 'reselect';
import { ApplicationState } from '../store';

const selectApp = (state: ApplicationState) => state.app;

export const selectWindowDimensions = createSelector(
  [selectApp],
  (app) => app.windowDimensions
);

export const selectWindowWidth = createSelector(
  [selectWindowDimensions],
  (windowDimensions) => (windowDimensions ? windowDimensions.width : null)
);
