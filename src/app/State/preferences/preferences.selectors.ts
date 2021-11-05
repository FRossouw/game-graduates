import { createFeatureSelector, createSelector } from '@ngrx/store';
import { preferencesFeatureKey, PreferenceState } from './preferences.reducer';

const preferencesFeatureState = createFeatureSelector<PreferenceState>(preferencesFeatureKey);

export const selectPreference = createSelector(
    preferencesFeatureState,
    (state) => state.preferences
);

export const selectThemeKey = createSelector(
    preferencesFeatureState,
    (state) => state.preferences.themeKey
);
