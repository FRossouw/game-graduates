import { createReducer, Action, on } from '@ngrx/store';
import * as MenuActions from '../menu/menu.actions';
import { iMenu } from '../../Utils/Models';

export const menuFeatureKey = 'menu';

export interface MenuState {
    loading: boolean;
    menu: iMenu;
}

const initialState: MenuState = {
    loading: false,
    menu: {
        contactUs: false,
        leaderboards: false,
        mainGame: false,
        mainMenu: true,
        options: false,
        tutorial: false
    }
};


const locationReducer = createReducer(
    initialState,
    // ===============================================================================
    // Menu Selection
    // ===============================================================================
    on(MenuActions.setMenuSelection, (state, action) => {
        return {
            ...state,
            loading: true,
            menu: action.menu
        };
    }),
    on(MenuActions.setMenuSelectionSuccess, (state) => {
        return {
            ...state,
            loading: false
        };
    })
);

export function reducer(state: MenuState | undefined, action: Action): any {
    return locationReducer(state, action);
}
