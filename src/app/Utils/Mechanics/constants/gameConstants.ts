import { GameConst } from './constantModels';

export const GAME_DEFAULTS: GameConst = {
    framesPerSecond: 30,
    images: {
        width: 60,
        height: 60,
        gap: 1,
        columns: 40,
        rows: 30
    }
};

export const GAME: GameConst = {...GAME_DEFAULTS};
