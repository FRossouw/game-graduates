import { createAction, props } from '@ngrx/store';
import { iMenu } from '../../Utils/Models';

// ============================================================================================================
// Menu Selection
// ============================================================================================================
export const setMenuSelection = createAction('[Menu] Set Menu Selection',
    props<{ menu: iMenu }>());

export const setMenuSelectionSuccess = createAction('[Menu] Set Menu Selection Success');
