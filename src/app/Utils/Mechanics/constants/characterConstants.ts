import { CharacterConst } from './constantModels';

export const CHARACTER_DEFAULT: CharacterConst = {
    walking: 3,
    running: 6,
    camera: {
        distanceFromCameraPanX: 150,
        distanceFromCameraPanY: 100
    }
};

export const CHARACTER: CharacterConst = {...CHARACTER_DEFAULT};
