import * as Common from '../common/common';
import * as Draw from '../draw/draw';
import * as CONST from '../constants/constants';
import * as Models from '../models/models';

export class Character {

    // =================================================
    // Variables for Character Object
    // =================================================

    // Basic Information
    player: Models.Player;
    keyBindings: Models.KeyBindings;

    // Position
    angle: number;
    positionX: number;
    positionY: number;
    nextX: number;
    nextY: number;

    // Movement
    speed: number;
    movingUp: boolean;
    movingDown: boolean;
    movingLeft: boolean;
    movingRight: boolean;

    // Camera
    camera: {
        panX: number,
        panY: number
    };

    // =================================================
    // Default constructor for a Character Object
    // =================================================

    /**
     * The constructor for creating a new character on the grid
     * @param player This sets the player object of the character.
     * @param speed This sets the speed of the character
     */
    constructor(player: Models.Player, speed: number) {
        this.characterPropertyReset(0, false, false, false, false, 0, 0, 0, 75, 75, 0, 0);
        this.player = player;
        this.speed = speed;
    }

    // =================================================
    // Methods for Character Moevment
    // =================================================

    /**
     * Move the character accorgin to keyboard inputs and movement booleans
     * Character movement is also determined by tile collisions and will prevent movement in certain cases.
     * Some tile collisions will allow a character to pick up items
     * @param levelGrid The grid that builds the level.
     */
    move(levelGrid: number[]): void {
        this.nextXYPositionXY();
        this.changeCharacterPosition(this.movingLeft, this.movingUp, this.movingRight, this.movingDown);
        this.tileCollision(levelGrid);
    }

    /**
     * Assign the Positions X and Y to the Next positions X and Y
     * It is used to check the future tiles.
     * This is mainly used for colision detection
     */
    nextXYPositionXY(): void {
        this.nextX = this.positionX;
        this.nextY = this.positionY;
    }

    /**
     * Assign the Next X and Y to the Positions X and Y
     * It is used to check the future tiles.
     * This is mainly used for colision detection
     */
    positionXYNextXY(): void {
        this.positionX = this.nextX;
        this.positionY = this.nextY;
    }

    /**
     * Changes the position of the character according to movement booleans.
     * @param moveLeft Move the character left (west)
     * @param moveUp  Move the character up (north)
     * @param moveRight  Move the character right (east)
     * @param moveDown  Move the character down (south)
     */
    changeCharacterPosition(moveLeft: boolean, moveUp: boolean, moveRight: boolean, moveDown: boolean): void {
        if (moveLeft) { this.nextX += -this.speed; }
        if (moveRight) { this.nextX += this.speed; }
        if (moveUp) { this.nextY += -this.speed; }
        if (moveDown) { this.nextY += this.speed; }
    }

    /**
     * Check whether the character is allowed to move.
     * Checks tile collisions and item pick
     * @param grid The grid that builds the level.
     */
    tileCollision(grid: number[]): void {
        const walkIntoTileIndex = Common.getTileAtCoordinates(this.nextX, this.nextY);
        let walkIntoTileType = CONST.IMAGECODE.wall;

        walkIntoTileType = grid[walkIntoTileIndex];

        switch (walkIntoTileType) {
            case CONST.IMAGECODE.ground:
                this.positionXYNextXY();
                break;

            case CONST.IMAGECODE.goal:
                this.positionXYNextXY();
                grid[walkIntoTileIndex] = CONST.IMAGECODE.ground; // This removes an item from the game
                break;

            case CONST.IMAGECODE.wall:
                break;
            default:
                break;
        }
    }

    // =================================================
    // Methods for Camera Movement
    // =================================================

    /**
     * Follows the character object on the canvas.
     * @param gameCanvas The canvas where the character needs to be drawn on.
     */
    cameraFollowCharacter(gameCanvas: Models.Canvas): void {
        const cameraFocusCenterX = this.camera.panX + gameCanvas.canvas.width / 2;
        const cameraFocusCenterY = this.camera.panY + gameCanvas.canvas.height / 2;

        const playerDistFromCameraFocusX = Math.abs(this.positionX - cameraFocusCenterX);
        const playerDistFromCameraFocusY = Math.abs(this.positionY - cameraFocusCenterY);

        if (playerDistFromCameraFocusX > CONST.CHARACTER.camera.distanceFromCameraPanX) {
            if (cameraFocusCenterX < this.positionX) {
                this.camera.panX += this.speed;
            } else {
                this.camera.panX -= this.speed;
            }
        }
        if (playerDistFromCameraFocusY > CONST.CHARACTER.camera.distanceFromCameraPanY) {
            if (cameraFocusCenterY < this.positionY) {
                this.camera.panY += this.speed;
            } else {
                this.camera.panY -= this.speed;
            }
        }

        // The game will not show out of bounds
        if (this.camera.panX < 0) { this.camera.panX = 0; }
        if (this.camera.panY < 0) { this.camera.panY = 0; }

        const maxPanRight = CONST.GAME.images.columns * CONST.GAME.images.width - gameCanvas.canvas.width;
        const maxPanTop = CONST.GAME.images.rows * CONST.GAME.images.height - gameCanvas.canvas.height;

        if (this.camera.panX > maxPanRight) { this.camera.panX = maxPanRight; }
        if (this.camera.panY > maxPanTop) { this.camera.panY = maxPanTop; }
    }

    // =================================================
    // Methods for Character Keyboard Bindings
    // =================================================

    /**
     * Sets up keyboardbindings for the characters movement
     * @param left Key to press to move the character left (west)
     * @param up Key to press to move the character up (north)
     * @param right Key to press to move the character right (east)
     * @param down Key to press to move the character down (south)
     * @param running Key to press to move the character faster
     */
    setKeyBindings(left: string, up: string, right: string, down: string, running: string): void {
        this.keyBindings = { moveUp: up, moveDown: down, moveLeft: left, moveRight: right, running } as Models.KeyBindings;
    }

    // =================================================
    // Methods for Drawing the Character
    // =================================================

    /**
     * Draws the characters image on the canvas at the characters position.
     * @param canvas The canvas where the character needs to be drawn on.
     * @param imgList The list of image objects loaded from the network.
     * @param playerImageCode The IMAGECODE of a player image.
     */
    drawCharacter(canvas: Models.Canvas, imgList: any[], playerImageCode: number): void {
        Draw.drawImageCenteredWithRotation(canvas, imgList[playerImageCode], this.positionX, this.positionY, this.angle);
    }

    // =================================================
    // Methods for Resetting Character
    // =================================================

    /**
     * Resets the entire character object to default values.
     * This is for initialization purposes only.
     * Character keybindings will be reset to WASD and Left Shift as defaults
     * @param speed Reset the movement speed of the character.
     * @param moveLeft Reset the movement check boolean (left - west)
     * @param moveUp Reset the movement check boolean (up - north)
     * @param moveRight Reset the movement check boolean (right - east)
     * @param moveDown Reset the movement check boolean (down - south)
     * @param cameraPanX Resets the camera Pan X position.
     * @param cameraPanY Resets the camera Pan Y position.
     * @param angle Resets the angle the character image is rotated to.
     * @param positionX Resets the X position of the character.
     * @param positionY Resets the Y position of the character.
     * @param nextX Resets the next X position of the character.
     * @param nextY Resets the next Y position of the character.
     */
    characterPropertyReset(
        speed: number, moveLeft: boolean, moveUp: boolean, moveRight: boolean, moveDown: boolean,
        cameraPanX: number, cameraPanY: number,
        angle: number, positionX: number, positionY: number, nextX: number, nextY: number
    ): void {
        this.resetMoving(speed, moveLeft, moveUp, moveRight, moveDown);
        this.resetCamera(cameraPanX, cameraPanY);
        this.resetPosition(angle, positionX, positionY, nextX, nextY);
        this.setKeyBindings(CONST.INPUTKEYS.left.key, CONST.INPUTKEYS.up.key, CONST.INPUTKEYS.right.key, CONST.INPUTKEYS.down.key, CONST.INPUTKEYS.run.key);
    }

    /**
     * Resets the movements of the character.
     * This is for initialization purposes only.
     * @param speed Reset the movement speed of the character.
     * @param moveLeft Reset the movement check boolean (left - west)
     * @param moveUp Reset the movement check boolean (up - north)
     * @param moveRight Reset the movement check boolean (right - east)
     * @param moveDown Reset the movement check boolean (down - south)
     */
    resetMoving(speed: number, moveLeft: boolean, moveUp: boolean, moveRight: boolean, moveDown: boolean): void {
        this.speed = speed;
        this.movingUp = moveUp;
        this.movingDown = moveDown;
        this.movingLeft = moveLeft;
        this.movingRight = moveRight;
    }

    /**
     * Resets the positioning of the character camera.
     * The camera position will change as the character moves.
     * This is for initialization purposes only.
     * @param cameraPanX Resets the camera Pan X position.
     * @param cameraPanY Resets the camera Pan Y position.
     */
    resetCamera(cameraPanX: number, cameraPanY: number): void {
        this.camera = {
            panX: cameraPanX,
            panY: cameraPanY
        };
    }

    /**
     * Resets the positioning of the character.
     * The grid will change this to where the character is placed within the grid.
     * This is for initialization purposes only.
     * @param angle Resets the angle the character image is rotated to.
     * @param positionX Resets the X position of the character.
     * @param positionY Resets the Y position of the character.
     * @param nextX Resets the next X position of the character.
     * @param nextY Resets the next Y position of the character.
     */
    resetPosition(angle: number, positionX: number, positionY: number, nextX: number, nextY: number): void {
        this.angle = angle;
        this.positionX = positionX;
        this.positionY = positionY;
        this.nextX = nextX;
        this.nextY = nextY;
    }
}
