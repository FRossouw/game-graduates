import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducers from '../reducers/gameReducer';

const gameFeatureState = createFeatureSelector<Reducers.GameState>(Reducers.gameFeatureKey);
