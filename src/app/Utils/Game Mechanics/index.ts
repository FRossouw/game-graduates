
// ================================================================
// Models
// ================================================================
import { GameCanvas } from './Models/gameCanvas';
import { Character } from './Models/character';

// ================================================================
// Mechanics
// ================================================================
import {
    getCanvasContext2d,
    drawOnScreenOnlyBricks
} from './Mechanics/common';
import { setUpInputEvents } from './Mechanics/inputs';

// ================================================================
// Drawing
// ================================================================
import {
    drawRectangle,
    drawCircle
} from './Mechanics/draw';

// ================================================================
// Constants
// ================================================================
import { KEYBINDINGS } from './constants/keyBindings';
import { CONSTANTS } from './constants/constants';

export {
    // Models
    GameCanvas,
    Character,

    // Mechanics
    getCanvasContext2d,
    setUpInputEvents,
    drawOnScreenOnlyBricks,

    // Drawing
    drawRectangle,
    drawCircle,

    // Constants
    KEYBINDINGS,
    CONSTANTS
};
