import { action } from 'typesafe-actions';
import { AppActionTypes } from './app.types';

export const setWindowDimensions = () =>
  action(AppActionTypes.SET_WINDOW_DIMENSIONS);
