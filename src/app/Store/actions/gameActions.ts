import { createAction, props } from '@ngrx/store';
import * as StoreModels from '../models/index';

// =============================================================================
// Preferences
// =============================================================================

export const setPreference =
    createAction('[Preference] Set Preference',
        props<{ preference: StoreModels.Preference }>());

export const setMenuSelection =
    createAction('[Preference] Set Menu Selection',
        props<{ menu: StoreModels.MenuSelection }>());

export const setControllerButton =
    createAction('[Preference] Set Controller Button',
        props<{ controller: StoreModels.Controller }>());
