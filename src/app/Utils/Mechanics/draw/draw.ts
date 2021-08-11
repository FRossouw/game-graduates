import { GAME } from "../constants/gameConstants";
import { IMAGECODE } from "../constants/images";
import { Canvas } from "../models/canvas";
import { Character } from "../models/character";

export function drawRectangle(gameCanvas: Canvas, color: string): void {
    gameCanvas.context2D.fillStyle = color;
    gameCanvas.context2D.fillRect(gameCanvas.positions.topX, gameCanvas.positions.topY, gameCanvas.canvas.width, gameCanvas.canvas.height);
}

function drawRectangleCustom(gameCanvas: Canvas, color: string, posX: number, posY: number, width: number, height: number): void {
    gameCanvas.context2D.fillStyle = color;
    gameCanvas.context2D.fillRect(posX, posY, width, height);
}

export function drawImageCenteredWithRotation(
    canvas: Canvas,
    image: CanvasImageSource,
    positionX: number,
    positionY: number,
    angle: number = 0
): void {
    canvas.context2D.save();
    canvas.context2D.translate(positionX, positionY);
    canvas.context2D.rotate(angle);
    canvas.context2D.drawImage(image, - image.width / 2, - image.height / 2);
    canvas.context2D.restore();
}

export function drawOnScreenImagesOnly(
    gameCanvas: Canvas,
    character: Character,
    grid: number[],
    imgList: CanvasImageSource[],
): void {
    // What column of images will be visible on the canvas
    const colLeft = Math.floor(character.camera.panX / GAME.images.width);
    const rowTop = Math.floor(character.camera.panY / GAME.images.height);
    // How many columns will fit on the screen or area?
    const colsFitOnScreen = Math.floor(gameCanvas.canvas.width / GAME.images.width);
    const rowsFitOnScreen = Math.floor(gameCanvas.canvas.height / GAME.images.height);
    // Finding the right and bottom to draw (add two to prevent tiles popping in and off screen)
    const colRight = colLeft + colsFitOnScreen + 2;
    const rowBottom = rowTop + rowsFitOnScreen + 2;

    // Draw each image
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;

    for (let eachRow = 0; eachRow < GAME.images.rows; eachRow++) {
        for (let eachCol = 0; eachCol < GAME.images.columns; eachCol++) {
            const tileType = grid[arrayIndex];
            let tileImage = imgList[tileType];

            if (tileType === IMAGECODE.player) {
                const posX = (eachCol * GAME.images.width) + (GAME.images.width / 2);
                const posY = (eachRow * GAME.images.height) + (GAME.images.height / 2);
                character.positionX = posX;
                character.positionY = posY;
                tileImage = imgList[IMAGECODE.ground];
                grid[arrayIndex] = IMAGECODE.ground;
            }

            if (tileHasTransparency(tileType)) {
                gameCanvas.context2D.drawImage(imgList[IMAGECODE.ground], drawTileX, drawTileY);
            } // End of if a tile is transparent

            gameCanvas.context2D.drawImage(tileImage, drawTileX, drawTileY);
            drawTileX += GAME.images.width;
            arrayIndex++;
        } // End of for eachCol
        drawTileX = 0;
        drawTileY += GAME.images.height;
    } // End of for eachRow

}


function isImageAtTileCoord(tileColumn: number, tileRow: number, grid: number[]): boolean {
    const brickIndex = imageTileToIndex(tileColumn, tileRow);
    return (grid[brickIndex] === 1);
}

function imageTileToIndex(tileColumn: number, tileRow: number): number {
    return (tileColumn + GAME.images.columns * tileRow);
}

export function tileHasTransparency(checkTile: number): boolean {
    if (checkTile === IMAGECODE.goal) {
        console.log(checkTile === IMAGECODE.goal);
    }
    return (
        (checkTile === IMAGECODE.player) ||
        (checkTile === IMAGECODE.goal)
        // (checkTile === main.tiles.player) ||
        // (checkTile === main.tiles.key) ||
        // (checkTile === main.tiles.door) ||
        // (checkTile === main.tiles.r1) ||
        // (checkTile === main.tiles.r2) ||
        // (checkTile === main.tiles.r3) ||
        // (checkTile === main.tiles.r4) ||
        // (checkTile === main.tiles.r5) ||
        // (checkTile === main.tiles.r6) ||
        // (checkTile === main.tiles.r7) ||
        // (checkTile === main.tiles.cd) ||
        // (checkTile === main.tiles.cutlery) ||
        // (checkTile === main.tiles.jogurt) ||
        // (checkTile === main.tiles.pvc) ||
        // (checkTile === main.tiles.shampoo) ||
        // (checkTile === main.tiles.soda) ||
        // (checkTile === main.tiles.bottle)
    );
}

