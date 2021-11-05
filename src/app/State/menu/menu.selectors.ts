import { createFeatureSelector, createSelector } from '@ngrx/store';
import { menuFeatureKey, MenuState } from './menu.reducer';

const menuFeatureState = createFeatureSelector<MenuState>(menuFeatureKey);

export const selectMenuSelection = createSelector(
    menuFeatureState,
    (state) => state.menu
);
