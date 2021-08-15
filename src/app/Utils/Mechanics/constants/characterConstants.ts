import { Character_Const } from "./constantModels";

export const CHARACTER_DEFAULT: Character_Const = {
    walking: 3,
    running: 6,
    camera: {
        distanceFromCameraPanX: 150,
        distanceFromCameraPanY: 100
    }
};

export const CHARACTER: Character_Const = {...CHARACTER_DEFAULT};
