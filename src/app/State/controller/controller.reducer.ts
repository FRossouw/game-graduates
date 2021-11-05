import { createReducer, Action, on } from '@ngrx/store';
import * as ControllerActions from '../controller/controller.actions';
import { iController } from '../../Utils/Models';

export const controllerFeatureKey = 'controller';

export interface ControllerState {
  loading: boolean;
  controller: iController;
}

const initialState: ControllerState = {
  loading: false,
  controller: {
    start: false,
    options: false,
    theme: false,
    leftButtonsLeft: false,
    leftButtonsRight: false,
    leftButtonsUp: false,
    leftButtonsDown: false,
    leftAnalog: false,
    rightButtonsLeft: false,
    rightButtonsRight: false,
    rightButtonsUp: false,
    rightButtonsDown: false,
    rightAnalog: false
  }
};


const locationReducer = createReducer(
  initialState,
  // ===============================================================================
  // Controller
  // ===============================================================================
  on(ControllerActions.setController, (state, action) => {
    return {
      ...state,
      loading: true,
      controller: action.controller
    };
  }),
  on(ControllerActions.setControllerSuccess, (state, action) => {
    return {
      ...state,
      loading: false
    };
  })
);

export function reducer(state: ControllerState | undefined, action: Action): any {
  return locationReducer(state, action);
}
