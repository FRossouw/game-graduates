import { createFeatureSelector, createSelector } from '@ngrx/store';
import { controllerFeatureKey, ControllerState } from './controller.reducer';

const controllerFeatureState = createFeatureSelector<ControllerState>(controllerFeatureKey);

export const selectController = createSelector(
    controllerFeatureState,
    (state) => state.controller
);

export const selectStartButton = createSelector(
    controllerFeatureState,
    (state) => state.controller.start
);
