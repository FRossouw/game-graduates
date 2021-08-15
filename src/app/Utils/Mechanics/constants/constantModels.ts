
// =================================================
// Character Interfaces
// =================================================

export interface Character_Const {
    walking: number;
    running: number;
    camera: Character_Camera_Const;
}

export interface Character_Camera_Const {
    distanceFromCameraPanX: number;
    distanceFromCameraPanY: number;
}

// =================================================
// Game Interfaces
// =================================================

export interface Game_Const {
    framesPerSecond: number;
    images: Game_Images_Const
};

export interface Game_Images_Const {
    width: number;
    height: number;
    gap: number;
    columns: number;
    rows: number;
}

// =================================================
// Image Interfaces
// =================================================

export interface Image_Const {
    tileType: number;
    theFile: string;
}
