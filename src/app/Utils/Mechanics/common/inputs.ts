import { Character } from '../models/character';
import * as CONST from '../constants/constants';

export function setUpInputs(character: Character): void {
    document.addEventListener('keydown', (evt) => { keyPressed(evt, character); });
    document.addEventListener('keyup', (evt) => { keyReleased(evt, character); });
}

function keyPressed(evt: KeyboardEvent, character: Character): void {
    if (evt.code === character.keyBindings.moveUp) { character.movingUp = true; }
    if (evt.code === character.keyBindings.moveDown) { character.movingDown = true; }
    if (evt.code === character.keyBindings.moveLeft) { character.movingLeft = true; }
    if (evt.code === character.keyBindings.moveRight) { character.movingRight = true; }
    if (evt.code === character.keyBindings.running) { character.speed = CONST.CHARACTER.running; }
}

function keyReleased(evt: KeyboardEvent, character: Character): void {
    if (evt.code === character.keyBindings.moveUp) { character.movingUp = false; }
    if (evt.code === character.keyBindings.moveDown) { character.movingDown = false; }
    if (evt.code === character.keyBindings.moveLeft) { character.movingLeft = false; }
    if (evt.code === character.keyBindings.moveRight) { character.movingRight = false; }
    if (evt.code === character.keyBindings.running) { character.speed = CONST.CHARACTER.walking; }
}
