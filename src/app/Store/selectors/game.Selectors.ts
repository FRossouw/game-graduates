import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducers from '../reducers/game.Reducer';

const gameFeatureState = createFeatureSelector<Reducers.GameState>(Reducers.gameFeatureKey);

export const getLanguagePreference = createSelector(
    gameFeatureState,
    (state) => state.language
  );