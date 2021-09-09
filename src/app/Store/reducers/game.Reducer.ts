import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/gameActions';

export const gameFeatureKey = 'game';

export interface GameState {
  loading: boolean;
  language: number;
}

const initialState: GameState = {
  loading: false,
  language: 0,
};

const locationReducer = createReducer(
  initialState,
  on(Actions.setLanguagePreference, (state, action) => {
    return {
      ...state,
      language: action.languageID
    };
  }),
);

export function reducer(state: GameState | undefined, action: Action): any {
  return locationReducer(state, action);
}
