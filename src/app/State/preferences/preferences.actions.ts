import { createAction, props } from '@ngrx/store';
import { iPreference } from '../../Utils/Models';

// ============================================================================================================
// All Preferences
// ============================================================================================================
export const setPreference = createAction('[Preferences] Set Preference',
    props<{ preference: iPreference }>());

export const setPreferenceSuccess = createAction('[Preferences] Set Preference Success');

// ============================================================================================================
// Theme
// ============================================================================================================
export const setTheme = createAction('[Preferences] Set Theme',
    props<{ themeKey: number }>());

export const setThemeSuccess = createAction('[Preferences] Set Theme Success');
