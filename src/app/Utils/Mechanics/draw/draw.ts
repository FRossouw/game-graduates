import * as CONST from '../constants/constants';
import * as Model from '../models/models';

// =================================================
// Drawing of Shapes Methods
// =================================================

/**
 * Resets the entire canvas to a color.
 * This fills the entire canvas with the set color.
 * @param gameCanvas The canvas that will be reset.
 * @param color The color the canvas needs to be.
 */
export function drawRectangle(gameCanvas: Model.Canvas, color: string): void {
    gameCanvas.context2D.fillStyle = color;
    gameCanvas.context2D.fillRect(gameCanvas.positions.topX, gameCanvas.positions.topY, gameCanvas.canvas.width, gameCanvas.canvas.height);
}

// =================================================
// Drawing of Images Methods
// =================================================

/**
 * Draw an image on a canvas at a certain position.
 * @param canvas The canvas on which the image needs to be drawn.
 * @param image The image that needs to be drawn on the canvas.
 * @param positionX The X position where the image will start on the canvas.
 * @param positionY The Y position where the image will start on the canvas.
 * @param angle The rotation the image will be drawn on the canvas.
 */
export function drawImageCenteredWithRotation(canvas: Model.Canvas, image: CanvasImageSource, positionX: number, positionY: number, angle: number = 0): void {
    canvas.context2D.save();
    canvas.context2D.translate(positionX, positionY);
    canvas.context2D.rotate(angle);
    canvas.context2D.drawImage(image, - image.width / 2, - image.height / 2);
    canvas.context2D.restore();
}

/**
 * Draw images on the canvas.
 * Draws only images that are on screen.
 * @param gameCanvas The canvas on which the image needs to be drawn.
 * @param character The character that will be drawn on the canvas.
 * @param grid The grid for the level.
 * @param imgList The list of images from the network.
 */
export function drawImages(gameCanvas: Model.Canvas, character: Model.Character, grid: number[], imgList: CanvasImageSource[]): void {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;

    for (let eachRow = 0; eachRow < CONST.GAME.images.rows; eachRow++) {
        for (let eachCol = 0; eachCol < CONST.GAME.images.columns; eachCol++) {
            const tileType = grid[arrayIndex];
            let tileImage = imgList[tileType];

            if (tileType === CONST.IMAGECODE.player) {
                const posX = (eachCol * CONST.GAME.images.width) + (CONST.GAME.images.width / 2);
                const posY = (eachRow * CONST.GAME.images.height) + (CONST.GAME.images.height / 2);
                character.positionX = posX;
                character.positionY = posY;
                tileImage = imgList[CONST.IMAGECODE.ground];
                grid[arrayIndex] = CONST.IMAGECODE.ground;
            }

            if (tileHasTransparency(tileType)) {
                gameCanvas.context2D.drawImage(imgList[CONST.IMAGECODE.ground], drawTileX, drawTileY);
            } // End of if a tile is transparent

            gameCanvas.context2D.drawImage(tileImage, drawTileX, drawTileY);
            drawTileX += CONST.GAME.images.width;
            arrayIndex++;
        } // End of for eachCol
        drawTileX = 0;
        drawTileY += CONST.GAME.images.height;
    } // End of for eachRow

}

// =================================================
// Tile Methods
// =================================================

/**
 * Checks whether a given tile is transparent or not.
 * @param checkTile The tile code to check transparency for.
 * @returns True if a tile is transparent and false if it is not transparent.
 */
function tileHasTransparency(checkTile: number): boolean {
    return (
        (checkTile === CONST.IMAGECODE.player) ||
        (checkTile === CONST.IMAGECODE.goal)
    );
}

