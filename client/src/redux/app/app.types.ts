export interface WindowDimensions {
  width: number;
  height: number;
}
export interface appState {
  readonly windowDimensions: WindowDimensions;
}

export enum AppActionTypes {
  SET_WINDOW_DIMENSIONS = 'SET_WINDOW_DIMENSIONS',
};
