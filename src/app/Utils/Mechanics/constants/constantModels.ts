
// =================================================
// Character Interfaces
// =================================================

export interface CharacterConst {
    walking: number;
    running: number;
    camera: CharacterCameraConst;
}

export interface CharacterCameraConst {
    distanceFromCameraPanX: number;
    distanceFromCameraPanY: number;
}

// =================================================
// Game Interfaces
// =================================================

export interface GameConst {
    framesPerSecond: number;
    images: GameImagesConst;
}

export interface GameImagesConst {
    width: number;
    height: number;
    gap: number;
    columns: number;
    rows: number;
}

// =================================================
// Image Interfaces
// =================================================

export interface ImageConst {
    tileType: number;
    theFile: string;
}

// =================================================
// Key Input Interfaces
// =================================================

export interface KeyInputConst {
    key: string;
    keyCode?: number;
}

export interface KeyInputsConst {
    up: KeyInputConst;
    down: KeyInputConst;
    left: KeyInputConst;
    right: KeyInputConst;
    run: KeyInputConst;
}
