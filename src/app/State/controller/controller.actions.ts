import { createAction, props } from '@ngrx/store';
import { iController } from '../../Utils/Models';

// ============================================================================================================
// Controller
// ============================================================================================================
export const setController = createAction('[Controller] Set Controller',
    props<{ controller: iController }>());

export const setControllerSuccess = createAction('[Controller] Set Controller Success');

