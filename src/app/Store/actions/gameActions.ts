import { createAction, props } from '@ngrx/store';

// =============================================================================
// Preferences
// =============================================================================

export const setLanguagePreference =
    createAction('[Preference] Set Language Preference',
        props<{ languageID: number }>());
