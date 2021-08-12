import { Action, createReducer, on } from '@ngrx/store';

export const gameFeatureKey = 'game';

export interface GameState { }

const initialState: GameState = {};

const locationReducer = createReducer(
  initialState,
);

export function reducer(state: GameState | undefined, action: Action): any {
  return locationReducer(state, action);
}
