import { drawImageCenteredWithRotation } from 'src/app/Utils/Game/Mechanics/draw';
import { getTileAtCoordinates, rowAndColArrayIndexed } from 'src/app/Utils/Game/Mechanics/gameCommon';
import { CONSTANTS } from '../Constants/constants';

export class Character {
    // Basic Information
    name: string;
    image: string;
    participantId: string;

    // Movement
    moveUp: boolean;
    moveRight: boolean;
    moveDown: boolean;
    moveLeft: boolean;
    speed: number;

    // Position
    positionX: number;
    positionY: number;
    nextX: number;
    nextY: number;

    // Angle or Rotation
    angle: number;

    currentLevel;
    grid: number[];

    /**
     * The constructor to create a new character
     * @param name The name of the character
     * @param positionX The position of the character on the x-axis
     * @param positionY The position of the character on the y-axis
     * @param image The image associated with the characer
     * @param speed The speed at which the characted moves
     */
    constructor(name: string, positionX: number, positionY: number, image: string, speed: number) {
        this.name = name;
        this.participantId = 'unknown';
        this.positionX = positionX;
        this.positionY = positionY;
        this.image = image;
        this.speed = speed;
        this.angle = 0;

        this.currentLevel = 0;
    }

    /**
     * This function moves the character.
     * @param grid This is the world grid for the level.
     */
    move(grid: number[]): void {
        this.grid = grid;
        this.nextX = this.positionX;
        this.nextY = this.positionY;

        this.changePosition();
        this.tileCollision(this.grid);
    }

    /**
     * This functions stops the character from moving
     */
    stopMoving(): void {
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
    }

    /**
     * This function changes the position of the character
     */
    changePosition(): void {
        if (this.moveUp) {
            this.nextY -= this.speed;
        }

        if (this.moveDown) {
            this.nextY += this.speed;
        }

        if (this.moveLeft) {
            this.nextX -= this.speed;
        }

        if (this.moveRight) {
            this.nextX += this.speed;
        }
    }

    /**
     * This function checks for collisions between the character and the world.
     * @param grid This is the world grid for the level.
     */
    tileCollision(grid: number[]): void {
        if (!grid) { grid = this.grid; }

        const walkIntoTileIndex = getTileAtCoordinates(this.nextX, this.nextY);
        let walkIntoTileType = CONSTANTS.images.wall;

        if (walkIntoTileType !== undefined) {
            if (grid === undefined) { grid = [0]; }
            walkIntoTileType = grid[walkIntoTileIndex];
        }

        switch (walkIntoTileType) {
            case CONSTANTS.images.ground:
                this.positionX = this.nextX;
                this.positionY = this.nextY;
                break;

            case CONSTANTS.images.wall:
            default:
                break;
        }
    }

    /**
     * This function draws the character on the world.
     * @param canvasContext This is the canvas context where the image needs to be drawn. In 2d.
     * @param imgList This is the list of all image references.
     */
    draw(canvasContext: CanvasRenderingContext2D, imgList: any[]): void {
        drawImageCenteredWithRotation(canvasContext, imgList[CONSTANTS.images.player], this.positionX, this.positionY, this.angle);
    }

    /**
     * This function resets the character on the world grid.
     * @param grid This is the world grid for the level.
     */
    reset(grid: number[]): void {
        for (let eachRow = 0; eachRow < CONSTANTS.game.rows; eachRow++) {
            for (let eachCol = 0; eachCol < CONSTANTS.game.columns; eachCol++) {

                const arrayIndex = rowAndColArrayIndexed(eachCol, eachRow);
                if (grid[arrayIndex] === CONSTANTS.images.player) {
                    grid[arrayIndex] = CONSTANTS.images.ground;
                    this.positionX = (eachCol * CONSTANTS.game.width) + (CONSTANTS.game.width / 2);
                    this.positionY = (eachRow * CONSTANTS.game.height) + (CONSTANTS.game.height / 2);
                }

            } // End of for eachCol
        } // End of for eachRow
    }

}
