
import { PreferenceState } from "./preferences/preferences.reducer";
import { ControllerState } from "./controller/controller.reducer";
import { MenuState } from "./menu/menu.reducer";

export interface State {
    preferences: PreferenceState,
    controller: ControllerState,
    menu: MenuState
}
