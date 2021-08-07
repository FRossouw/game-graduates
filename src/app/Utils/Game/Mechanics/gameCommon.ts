
import { Character } from '../Models/character';
import { CONSTANTS } from '../Constants/constants';
import { GAMEIMAGES } from '../Constants/images';
import { drawRectangle, drawText } from './draw';


/**
 * This function resets the canvas
 * @param canvas The canvas on the document.
 * @param canvasContext The canvas context where the circle needs to be drawn. This needs to be in 2d.
 * @param canvasFill This is the color for the canvas.
 * @param text The text that needs to be displayed while all images are loading.
 * @param textFill The color of the text that needs to be displayed.
 */
export function resetCanvas(
    canvas: HTMLCanvasElement,
    canvasContext: CanvasRenderingContext2D,
    canvasFill: string,
    text: string,
    textFill: string
): void {
    drawRectangle(canvasContext, canvasFill, 0, 0, canvas.width, canvas.height);
    drawText(canvasContext, text, canvas.width / 2, canvas.height / 2, textFill);
}

/**
 * This function counts the images that need to be loaded
 */
export function countImagesToLoad(): void {
    let counter = globalThis.imagesCount;
    counter--;
    globalThis.imagesCount = counter;
}

/**
 * This function loads all the images onto the canvas.
 * @param imageList The list of the images
 */
export function loadImages(imageList: any[]): void {
    imageList[CONSTANTS.images.player] = document.createElement('img');
    const images = GAMEIMAGES.slice();
    globalThis.imagesCount = images.length;

    images.forEach(imgElement => {
        if (imgElement.tileType === CONSTANTS.images.player) {
            beginImageLoad(imgElement.tileType, imgElement.theFile, imageList);
        } else {
            loadWorldImages(imgElement.tileType, imgElement.theFile, imageList);
        }
    });
}

/**
 * This function loads the image source on an already existant img element
 * @param tileType The tile type associated with the image
 * @param fileName The filename of the actual image
 * @param imgList The list of images where the image is referenced
 */
export function beginImageLoad(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType].onload = countImagesToLoad;
    imgList[tileType].src = 'assets/main/' + fileName;
}

/**
 * This function creates the img element and then loads the image therefor.
 * @param tileType The tile type reference for the image
 * @param fileName The filename of the actual image
 * @param imgList The list of images where the image is referenced
 */
export function loadWorldImages(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType] = document.createElement('img');
    imgList[tileType].onload = countImagesToLoad;
    imgList[tileType].src = 'assets/main/' + fileName;
}

/**
 * This function retrieves the index in the entire array for a specific tile co-ordinate.
 * It converts positions into indexes.
 * @param xPos The position of the tile on the x-axis
 * @param yPos The position of the tile on the x-axis
 */
export function getTileAtCoordinates(xPos: number, yPos: number): number {
    const col = Math.floor(xPos / CONSTANTS.game.width);
    const row = Math.floor(yPos / CONSTANTS.game.height);
    const index = rowAndColArrayIndexed(col, row);

    if ((col >= 0) && (col < CONSTANTS.game.columns) &&
        (row >= 0) && (row < CONSTANTS.game.rows)) {
        return index;
    }
}

/**
 * This function converts rows and columns to array indexes
 * @param col The column position on the grid
 * @param row The row position on the grid
 */
export function rowAndColArrayIndexed(col: number, row: number): number {
    return col + CONSTANTS.game.columns * row;
}

/**
 * This function ensures that both the character and world is drawn every frame.
 * @param canvasContext The canvas context where the image needs to be drawn. This needs to be in 2d.
 * @param grid This is the grid (map) for the world.
 * @param imageList This is the reference to all the images that are loaded.
 * @param character This is the reference to the character that needs to be drawn.
 */
export function draw(
    canvasContext: CanvasRenderingContext2D,
    grid: number[],
    imageList: CanvasImageSource[],
    character: Character
): void {
    drawWorld(canvasContext, grid, imageList, character);
    character.draw(canvasContext, imageList);
}

/**
 * This image draws the entire world.
 * @param canvasContext The canvas context where the image needs to be drawn. This needs to be in 2d.
 * @param grid This is the grid (map) for the world.
 * @param imgList This is the reference to all the images that are loaded.
 * @param character This is the reference to the character that needs to be drawn.
 */
export function drawWorld(
    canvasContext: CanvasRenderingContext2D,
    grid: number[],
    imgList: CanvasImageSource[],
    character: Character
): void {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;

    for (let eachRow = 0; eachRow < CONSTANTS.game.rows; eachRow++) {
        for (let eachCol = 0; eachCol < CONSTANTS.game.columns; eachCol++) {
            const tileType = grid[arrayIndex];
            let tileImage = imgList[tileType];

            if (tileType === CONSTANTS.images.player) {
                const posX = (eachCol * CONSTANTS.game.width) + (CONSTANTS.game.width / 2);
                const posY = (eachRow * CONSTANTS.game.height) + (CONSTANTS.game.height / 2);
                character.positionX = posX;
                character.positionY = posY;
                tileImage = imgList[CONSTANTS.images.ground];
                grid[arrayIndex] = CONSTANTS.images.ground;
            }

            if (tileHasTransparency(tileType)) {
                canvasContext.drawImage(imgList[CONSTANTS.images.ground], drawTileX, drawTileY);
            } // End of if a tile is transparent

            canvasContext.drawImage(tileImage, drawTileX, drawTileY);
            drawTileX += CONSTANTS.game.width;
            arrayIndex++;
        } // End of for eachCol
        drawTileX = 0;
        drawTileY += CONSTANTS.game.height;
    } // End of for eachRow

}

/**
 * This function checks whether a tile has transparancy or not
 * @param checkTile The tile that needs to be checked
 */
export function tileHasTransparency(checkTile: number): boolean {
    return (
        false
        // (checkTile === main.tiles.goal) ||
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
