import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducers from '../reducers/game.Reducer';

const gameFeatureState = createFeatureSelector<Reducers.GameState>(Reducers.gameFeatureKey);

export const getPreference = createSelector(
  gameFeatureState,
  (state) => state.preferences
);

export const getMenuSelection = createSelector(
  gameFeatureState,
  (state) => state.menuSelection
);
