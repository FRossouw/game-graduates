import { IMAGECODE } from "../constants/images";
import { drawImageCenteredWithRotation } from "../draw/draw";
import { Canvas } from "./canvas";
import { KeyBindings } from "./keyBindings";

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
    }

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
        if (this.movingLeft) { this.nextX += -this.speed; }
        if (this.movingRight) { this.nextX += this.speed; }
        if (this.movingUp) { this.nextY += -this.speed; }
        if (this.movingDown) { this.nextY += this.speed; }
        // Insert code for tile collisions
        // if (isImageAtPixelCoord(this.nextX, this.nextY, grid) === false) {
        //     this.positionX = this.nextX;
        //     this.positionY = this.nextY;
        // }
        this.positionX = this.nextX; // remove
        this.positionY = this.nextY; // remove
    }

    cameraFollow(): void { }

    drawCharacter(canvas: Canvas, imgList: any[]): void {
        drawImageCenteredWithRotation(canvas, imgList[IMAGECODE.player], this.positionX, this.positionY, this.angle);
    }
}