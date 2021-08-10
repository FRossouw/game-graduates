import { CONSTANTS } from '../constants/constants';
import { Character } from '../Models/character';


export function setUpInputEvents(character: Character): void {
    document.addEventListener('keydown', (evt) => {
        keyPressed(evt, character);
    });
    document.addEventListener('keyup', (evt) => {
        keyReleased(evt, character);
    });
}

function keyPressed(evt: KeyboardEvent, character: Character): void {
    console.log(evt);
    if ((evt.code === 'KeyW') || (evt.code === 'ArrowUp')) {
        character.moveUp = true;
    }
    if ((evt.code === 'KeyD') || (evt.code === 'ArrowRight')) {
        character.moveRight = true;
    }
    if ((evt.code === 'KeyS') || (evt.code === 'ArrowDown')) {
        character.moveDown = true;
    }
    if ((evt.code === 'KeyA') || (evt.code === 'ArrowLeft')) {
        character.moveLeft = true;
    }
    if ((evt.code === 'ShiftLeft') || (evt.code === 'ShiftRight')) {
        character.speed = CONSTANTS.character.running;
    }
}

function keyReleased(evt: KeyboardEvent, character: Character): void {
    if ((evt.code === 'KeyW') || (evt.code === 'ArrowUp')) {
        character.moveUp = false;
    }
    if ((evt.code === 'KeyD') || (evt.code === 'ArrowRight')) {
        character.moveRight = false;
    }
    if ((evt.code === 'KeyS') || (evt.code === 'ArrowDown')) {
        character.moveDown = false;
    }
    if ((evt.code === 'KeyA') || (evt.code === 'ArrowLeft')) {
        character.moveLeft = false;
    }
    if ((evt.code === 'ShiftLeft') || (evt.code === 'ShiftRight')) {
        character.speed = CONSTANTS.character.speed;
    }
}
