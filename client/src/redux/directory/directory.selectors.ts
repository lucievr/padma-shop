import { createSelector } from 'reselect';
import { ApplicationState } from '../store';

const selectDirectory = (state: ApplicationState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
