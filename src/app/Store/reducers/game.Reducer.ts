import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/gameActions';
import * as Models from '../models';

export const gameFeatureKey = 'game';

export interface GameState {
  application: Models.Application,
  preferences: Models.Preference;
}

const initialState: GameState = {
  application: {
    loading: false
  },
  preferences: {
    Theme: 'DVT-DARK',
    Language: 1
  },
};

const locationReducer = createReducer(
  initialState,
  on(Actions.setPreference, (state, action) => {
    return {
      ...state,
      preferences: action.preference
    };
  }),
);

export function reducer(state: GameState | undefined, action: Action): any {
  return locationReducer(state, action);
}
