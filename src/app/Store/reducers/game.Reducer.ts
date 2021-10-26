import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/gameActions';
import * as Models from '../models';

export const gameFeatureKey = 'game';

export interface GameState {
  application: Models.Application;
  controller: Models.Controller;
  preferences: Models.Preference;
  menuSelection: Models.MenuSelection;
}

const initialState: GameState = {
  application: {
    loading: false
  },
  controller: {
    buttonLLeft: false,
    buttonLRight: false,
    buttonLDown: false,
    buttonLUp: false,
    buttonRLeft: false,
    buttonRRight: false,
    buttonRDown: false,
    buttonRUp: false,
    buttonAnalogLeft: false,
    buttonAnalogRight: false,
    buttonOptions: false,
    buttonStart: false,
    buttonTheme: false
  },
  preferences: {
    theme: 'DVT-LIGHT',
    language: 0
  },
  menuSelection: {
    contactUs: false,
    leaderboards: false,
    mainGame: false,
    mainMenu: true,
    options: false,
    tutorial: false
  }
};

const locationReducer = createReducer(
  initialState,
  on(Actions.setPreference, (state, action) => {
    return {
      ...state,
      preferences: action.preference
    };
  }),
  on(Actions.setMenuSelection, (state, action) => {
    console.log(action.menu);
    return {
      ...state,
      menuSelection: action.menu
    };
  }),
  on(Actions.setControllerButton, (state, action) => {
    return {
      ...state,
      controller: { ...action.controller }
    };
  }),
);

export function reducer(state: GameState | undefined, action: Action): any {
  return locationReducer(state, action);
}
