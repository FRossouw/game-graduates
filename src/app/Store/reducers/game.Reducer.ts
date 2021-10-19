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
    buttonUp: false,
    buttonLeft: false,
    buttonRight: false,
    buttonDown: false,
    buttonTriangle: false,
    buttonSquare: false,
    buttonCircle: false,
    buttonX: false,
    buttonAnalogLeft: false,
    buttonAnalogRight: false,
    buttonOptions: false,
    buttonStart: false,
    buttonSelect: false
  },
  preferences: {
    theme: 'DVT-DARK',
    language: 0
  },
  menuSelection: {
    options: false
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
  on(Actions.setControllerButton, (state, action) => {
    const controllerChanged: Models.Controller = {
      buttonUp: action.buttonUp ? action.buttonUp : false,
      buttonLeft: action.buttonLeft ? action.buttonLeft : false,
      buttonRight: action.buttonRight ? action.buttonRight : false,
      buttonDown: action.buttonDown ? action.buttonDown : false,
      buttonTriangle: action.buttonTriangle ? action.buttonTriangle : false,
      buttonSquare: action.buttonSquare ? action.buttonSquare : false,
      buttonCircle: action.buttonCircle ? action.buttonCircle : false,
      buttonX: action.buttonX ? action.buttonX : false,
      buttonAnalogLeft: action.buttonAnalogLeft ? action.buttonAnalogLeft : false,
      buttonAnalogRight: action.buttonAnalogRight ? action.buttonAnalogRight : false,
      buttonOptions: action.buttonOptions ? action.buttonOptions : false,
      buttonStart: action.buttonStart ? action.buttonStart : false,
      buttonSelect: action.buttonSelect ? action.buttonSelect : false
    };
    return {
      ...state,
      controller: controllerChanged
    };
  }),
);

export function reducer(state: GameState | undefined, action: Action): any {
  return locationReducer(state, action);
}
