import { Game_Const } from "./constantModels";

export const GAME_DEFAULTS: Game_Const = {
    framesPerSecond: 30,
    images: {
        width: 60,
        height: 60,
        gap: 1,
        columns: 20,
        rows: 15
    }
};

export const GAME: Game_Const = {...GAME_DEFAULTS};
