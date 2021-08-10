import { CONSTANTS } from '../constants/constants';
import { isImageAtPixelCoord } from '../Mechanics/common';
import { GameCanvas } from './gameCanvas';

export class Character {

    // Movement
    speed: number;
    moveUp: boolean;
    moveRight: boolean;
    moveDown: boolean;
    moveLeft: boolean;

    // Position
    positionX: number;
    positionY: number;
    nextX: number;
    nextY: number;

    // Camera
    camPanX: number;
    camPanY: number;

    constructor(speed: number) {
        this.speed = speed;
        this.positionX = 0;
        this.positionY = 0;
        this.nextX = 0;
        this.nextY = 0;
        this.camPanX = 0.0;
        this.camPanY = 0.0;
    }

    move(grid: number[]): void {
        this.changePosition(grid);
    }

    changePosition(grid: number[]): void {
        this.nextX = this.positionX;
        this.nextY = this.positionY;

        if (this.moveLeft) {
            this.nextX += -this.speed;
        }
        if (this.moveRight) {
            this.nextX += this.speed;
        }
        if (this.moveUp) {
            this.nextY += -this.speed;
        }
        if (this.moveDown) {
            this.nextY += this.speed;
        }
        if (isImageAtPixelCoord(this.nextX, this.nextY, grid) === false) {
            this.positionX = this.nextX;
            this.positionY = this.nextY;
        }
    }

    reset(gameCanvas: GameCanvas): void {
        this.positionX = gameCanvas.canvas.width / 2;
        this.positionY = gameCanvas.canvas.height / 2;
    }

    cameraFollow(gameCanvas: GameCanvas): void {
        const cameraFocusCenterX = this.camPanX + gameCanvas.canvas.width / 2;
        const cameraFocusCenterY = this.camPanY + gameCanvas.canvas.height / 2;

        const playerDistFromCameraFocusX = Math.abs(this.positionX - cameraFocusCenterX);
        const playerDistFromCameraFocusY = Math.abs(this.positionY - cameraFocusCenterY);

        if (playerDistFromCameraFocusX > CONSTANTS.camera.distanceFromCameraPanX) {
            if (cameraFocusCenterX < this.positionX) {
                this.camPanX += this.speed;
            } else {
                this.camPanX -= this.speed;
            }
        }
        if (playerDistFromCameraFocusY > CONSTANTS.camera.distanceFromCameraPanY) {
            if (cameraFocusCenterY < this.positionY) {
                this.camPanY += this.speed;
            } else {
                this.camPanY -= this.speed;
            }
        }

        // The game will not show out of bounds
        if (this.camPanX < 0) { this.camPanX = 0; }
        if (this.camPanY < 0) { this.camPanY = 0; }

        const maxPanRight = CONSTANTS.image.columns * CONSTANTS.image.width - gameCanvas.canvas.width;
        const maxPanTop = CONSTANTS.image.rows * CONSTANTS.image.height - gameCanvas.canvas.height;

        if (this.camPanX > maxPanRight) { this.camPanX = maxPanRight; }
        if (this.camPanY > maxPanTop) { this.camPanY = maxPanTop; }
    }

}
