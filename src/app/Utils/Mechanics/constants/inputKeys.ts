import { KeyInputsConst, KeyInputConst } from './constantModels';

// Todo: Add missing keyboard keys
const KeyTab: KeyInputConst = { key: 'Tab', keyCode: 9 };
const KeyEnter: KeyInputConst = { key: 'Enter', keyCode: 13 };
const KeyEnterNumpad: KeyInputConst = { key: 'NumpadEnter', keyCode: 13 };
const KeyShiftLeft: KeyInputConst = { key: 'ShiftLeft', keyCode: 16 };
const KeyShiftRight: KeyInputConst = { key: 'ShiftRight', keyCode: 16 };
const KeyControlLeft: KeyInputConst = { key: 'ControlLeft', keyCode: 17 };
const KeyControlRight: KeyInputConst = { key: 'ControlRight', keyCode: 17 };
const KeyAltLeft: KeyInputConst = { key: 'AltLeft', keyCode: 18 };
const KeyAltRight: KeyInputConst = { key: 'AltRight', keyCode: 18 };
const KeySpace: KeyInputConst = { key: 'Space', keyCode: 32 };
const KeyArrowUp: KeyInputConst = { key: 'ArrowUp', keyCode: 38 };
const KeyArrowDown: KeyInputConst = { key: 'ArrowDown', keyCode: 40 };
const KeyA: KeyInputConst = { key: 'KeyA', keyCode: 65 };
const KeyB: KeyInputConst = { key: 'KeyB', keyCode: 66 };
const KeyC: KeyInputConst = { key: 'KeyC', keyCode: 67 };
const KeyD: KeyInputConst = { key: 'KeyD', keyCode: 68 };
const KeyE: KeyInputConst = { key: 'KeyE', keyCode: 69 };
const KeyF: KeyInputConst = { key: 'KeyF', keyCode: 70 };
const KeyG: KeyInputConst = { key: 'KeyG', keyCode: 71 };
const KeyH: KeyInputConst = { key: 'KeyH', keyCode: 72 };
const KeyI: KeyInputConst = { key: 'KeyI', keyCode: 73 };
const KeyJ: KeyInputConst = { key: 'KeyJ', keyCode: 74 };
const KeyK: KeyInputConst = { key: 'KeyK', keyCode: 75 };
const KeyL: KeyInputConst = { key: 'KeyL', keyCode: 76 };
const KeyM: KeyInputConst = { key: 'KeyM', keyCode: 77 };
const KeyN: KeyInputConst = { key: 'KeyN', keyCode: 78 };
const KeyO: KeyInputConst = { key: 'KeyO', keyCode: 79 };
const KeyP: KeyInputConst = { key: 'KeyP', keyCode: 80 };
const KeyQ: KeyInputConst = { key: 'KeyQ', keyCode: 81 };
const KeyR: KeyInputConst = { key: 'KeyR', keyCode: 82 };
const KeyS: KeyInputConst = { key: 'KeyS', keyCode: 83 };
const KeyT: KeyInputConst = { key: 'KeyT', keyCode: 84 };
const KeyU: KeyInputConst = { key: 'KeyU', keyCode: 85 };
const KeyV: KeyInputConst = { key: 'KeyV', keyCode: 86 };
const KeyW: KeyInputConst = { key: 'KeyW', keyCode: 87 };
const KeyX: KeyInputConst = { key: 'KeyX', keyCode: 88 };
const KeyY: KeyInputConst = { key: 'KeyY', keyCode: 89 };
const KeyZ: KeyInputConst = { key: 'KeyZ', keyCode: 90 };

export const KEYBOARDCODES = {
    KeyEnter,
    KeyEnterNumpad,
    KeyArrowUp,
    KeyArrowDown
};


export const INPUTKEYS_DEFAULT: KeyInputsConst = {
    up: KeyW,
    down: KeyS,
    left: KeyA,
    right: KeyD,
    run: KeyShiftLeft
};

export const INPUTKEYS: KeyInputsConst = {...INPUTKEYS_DEFAULT};
