import { createReducer, Action, on } from '@ngrx/store';
import { iPreference } from '../../Utils/Models';
import * as PreferenceActions from '../preferences/preferences.actions';

export const preferencesFeatureKey = 'preferences';

export interface PreferenceState {
  loading: boolean;
  preferences: iPreference;
}

const initialState: PreferenceState = {
  loading: false,
  preferences: {
    themeKey: 0,
    language: 0
  }
};


const locationReducer = createReducer(
  initialState,
  // ===============================================================================
  // All Preferences
  // ===============================================================================
  on(PreferenceActions.setPreference, (state, action) => {
    return {
      ...state,
      loading: true,
      preferences: action.preference
    };
  }),
  on(PreferenceActions.setPreferenceSuccess, (state) => {
    return {
      ...state,
      loading: false
    };
  }),
  // ===============================================================================
  // Theme
  // ===============================================================================
  on(PreferenceActions.setTheme, (state, action) => {
    const statePreferences = { ...state.preferences };
    statePreferences.themeKey = action.themeKey;
    return {
      ...state,
      loading: true,
      preferences: state.preferences
    };
  }),
  on(PreferenceActions.setThemeSuccess, (state) => {
    return {
      ...state,
      loading: false
    };
  }),
);

export function reducer(state: PreferenceState | undefined, action: Action): any {
  return locationReducer(state, action);
}
