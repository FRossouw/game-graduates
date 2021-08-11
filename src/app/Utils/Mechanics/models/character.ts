import { CHARACTER } from '../constants/characterConstants';
import { GAME } from '../constants/gameConstants';
import { IMAGECODE } from '../constants/images';
import { drawImageCenteredWithRotation } from '../draw/draw';
import { Canvas } from './canvas';
import { KeyBindings } from './keyBindings';

export class Character {

    // Basic Information
    name: string;
    image: string;
    keyBindings: KeyBindings;

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

    constructor(
        image: string,
        name: string,
        speed: number
    ) {
        this.characterPropertyReset();
        this.image = image;
        this.name = name;
        this.speed = speed;
    }

    characterPropertyReset(): void {
        this.speed = 0;
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
        this.camera = {
            panX: 0,
            panY: 0
        };
        this.angle = 0;
        this.positionX = 75;
        this.positionY = 75;
        this.nextX = 0;
        this.nextY = 0;
        this.keyBindings = { moveUp: 'KeyW', moveDown: 'KeyS', moveLeft: 'KeyA', moveRight: 'KeyD', running: 'ShiftLeft' } as KeyBindings;
    }

    move(grid: number[]): void {
        this.nextX = this.positionX;
        this.nextY = this.positionY;
        this.changePosition();
        this.tileCollision(grid);
        this.positionX = this.nextX; // remove
        this.positionY = this.nextY; // remove
    }

    cameraFollow(gameCanvas: Canvas): void {
        const cameraFocusCenterX = this.camera.panX + gameCanvas.canvas.width / 2;
        const cameraFocusCenterY = this.camera.panY + gameCanvas.canvas.height / 2;

        const playerDistFromCameraFocusX = Math.abs(this.positionX - cameraFocusCenterX);
        const playerDistFromCameraFocusY = Math.abs(this.positionY - cameraFocusCenterY);

        if (playerDistFromCameraFocusX > CHARACTER.camera.distanceFromCameraPanX) {
            if (cameraFocusCenterX < this.positionX) {
                this.camera.panX += this.speed;
            } else {
                this.camera.panX -= this.speed;
            }
        }
        if (playerDistFromCameraFocusY > CHARACTER.camera.distanceFromCameraPanY) {
            if (cameraFocusCenterY < this.positionY) {
                this.camera.panY += this.speed;
            } else {
                this.camera.panY -= this.speed;
            }
        }

        // The game will not show out of bounds
        if (this.camera.panX < 0) { this.camera.panX = 0; }
        if (this.camera.panY < 0) { this.camera.panY = 0; }

        const maxPanRight = GAME.images.columns * GAME.images.width - gameCanvas.canvas.width;
        const maxPanTop = GAME.images.rows * GAME.images.height - gameCanvas.canvas.height;

        if (this.camera.panX > maxPanRight) { this.camera.panX = maxPanRight; }
        if (this.camera.panY > maxPanTop) { this.camera.panY = maxPanTop; }
    }

    changePosition(): void {
        if (this.movingLeft) { this.nextX += -this.speed; }
        if (this.movingRight) { this.nextX += this.speed; }
        if (this.movingUp) { this.nextY += -this.speed; }
        if (this.movingDown) { this.nextY += this.speed; }
    }

    tileCollision(grid: number[]): void { }

    drawCharacter(canvas: Canvas, imgList: any[]): void {
        drawImageCenteredWithRotation(canvas, imgList[IMAGECODE.player], this.positionX, this.positionY, this.angle);
    }
}
