import { CONSTANTS } from '../constants/constants';
import { Character } from '../Models/character';
import { GameCanvas } from '../Models/gameCanvas';
import { drawRectangle } from './draw';


export function getCanvasContext2d(canvasID: string, canvasObject: GameCanvas): GameCanvas {
    canvasObject.canvas = document.getElementById(canvasID);
    canvasObject.context2D = canvasObject.canvas.getContext('2d');
    return canvasObject;
}

export function drawOnScreenOnlyBricks(gameCanvas: GameCanvas, character: Character, grid: number[]): void {
    // What column of images will be visible on the canvas
    const colLeft = Math.floor(character.camPanX / CONSTANTS.image.width);
    const rowTop = Math.floor(character.camPanY / CONSTANTS.image.height);
    // How many columns will fit on the screen or area?
    const colsFitOnScreen = Math.floor(gameCanvas.canvas.width / CONSTANTS.image.width);
    const rowsFitOnScreen = Math.floor(gameCanvas.canvas.height / CONSTANTS.image.height);
    // Finding the right and bottom to draw (add two to prevent tiles popping in and off screen)
    const colRight = colLeft + colsFitOnScreen + 2;
    const rowBottom = rowTop + rowsFitOnScreen + 2;
    // Draw each image
    for (let eachColumn = colLeft; eachColumn < colRight; eachColumn++) {
        for (let eachRow = rowTop; eachRow < rowBottom; eachRow++) {
            if (isImageAtTileCoord(eachColumn, eachRow, grid)) {
                const leftEdgeX = eachColumn * CONSTANTS.image.width;
                const topEdgeY = eachRow * CONSTANTS.image.height;
                drawRectangle(
                    gameCanvas, leftEdgeX, topEdgeY,
                    CONSTANTS.image.width - CONSTANTS.image.gap,
                    CONSTANTS.image.height - CONSTANTS.image.gap,
                    'Blue'
                );
            } // end of isBrickAtTileCoord()
        } // End of eachRow
    } // End of eachColumn

}

function isImageAtTileCoord(tileColumn: number, tileRow: number, grid: number[]): boolean {
    const brickIndex = imageTileToIndex(tileColumn, tileRow);
    return (grid[brickIndex] === 1);
}

function imageTileToIndex(tileColumn: number, tileRow: number): number {
    return (tileColumn + CONSTANTS.image.columns * tileRow);
}

export function isImageAtPixelCoord(hitPixelX: number, hitPixelY: number, grid: number[]): boolean {
    const tileCol = Math.floor(hitPixelX / CONSTANTS.image.width);
    const tileRow = Math.floor(hitPixelY / CONSTANTS.image.height);

    // first check whether the slider is within any part of the brick wall
    if (
        tileCol < 0 || tileCol >= CONSTANTS.image.columns ||
        tileRow < 0 || tileRow >= CONSTANTS.image.rows
    ) {
        return false;
    }

    const brickIndex = imageTileToIndex(tileCol, tileRow);
    return (grid[brickIndex] === 1);
}
