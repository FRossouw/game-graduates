import { CONSTANTS } from '../Constants/constants';
import { Character } from '../Models/character';

/**
 * This function sets up the input event listeners for the keyboard
 * @param character The character associated with the input controls
 */
export function setupInputEvents(character: Character): void {
    document.addEventListener('keydown', (evt) => {
        keyPressed(evt, character);
    });

    document.addEventListener('keyup', (evt) => {
        keyReleased(evt, character);
    });
}

/**
 * This function checks what keys are pressed and sends information to the character.
 * The character uses this information to move accordingly.
 * @param evt The keyboard event that is fired when a button is pressed
 * @param character The character that needs to move when a button is pressed
 */
export function keyPressed(evt: KeyboardEvent, character: Character): void {
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

/**
 * This function checks what keys are released and sends information to the character.
 * The character uses this information to move accordingly.
 * @param evt The keyboard event that is fired when a button is released
 * @param character The character that needs to move when a button is released
 */
export function keyReleased(evt: KeyboardEvent, character: Character): void {
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
