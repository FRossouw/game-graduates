import { createAction, props } from '@ngrx/store';
import { Preference } from '../models';

// =============================================================================
// Preferences
// =============================================================================

export const setPreference =
    createAction('[Preference] Set Preference',
        props<{ preference: Preference }>());
