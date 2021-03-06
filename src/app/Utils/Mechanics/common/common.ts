import * as Model from './../models/models';
import * as CONST from '../constants/constants';

// ===================================================================
// Canvas and Context
// ===================================================================

/**
 * Retrieves the canvas 2d rendering context for a canvas on the DOM
 * @param canvas The canvas object reference of which the content needs to be retrieved.
 */
export function getCanvasContext2d(canvas: Model.Canvas): void {
    canvas.canvas = document.getElementById(canvas.htmlID);
    canvas.context2D = canvas.canvas.getContext('2d');
}

/**
 * Resizes the canvas to fit the entire screen
 * @param canvas The canvas object reference on the DOM.
 * @param size The new width and height the canvas needs to be.
 */
export function resizeCanvasCustom(canvas: Model.Canvas, screen: { width: number, height: number }): void {
    canvas.canvas = document.getElementById(canvas.htmlID);
    canvas.canvas.width = screen.width;
    canvas.canvas.height = screen.height;
}

/**
 * Resizes the canvas to fit the entire screen
 * @param canvas The canvas object reference on the DOM.
 */
export function resizeCanvasFullScreen(canvas: Model.Canvas): void {
    canvas.canvas = document.getElementById(canvas.htmlID);
    if (canvas?.canvas?.width < window.innerWidth) {
        canvas.canvas.width = window.innerWidth - canvas.margin.width;
    }
    if (canvas?.canvas?.height < window.innerHeight) {
        canvas.canvas.height = window.innerHeight - canvas.margin.height;
    }
}

// ===================================================================
// Image Methods
// ===================================================================

/**
 * Load and count images from the network
 * @param imageList A list where images will be referenced from the network.
 */
export function loadImages(imageList: any[]): void {
    imageList[CONST.IMAGECODE.player] = document.createElement('img');
    const images = CONST.GAMEIMAGES.slice();
    globalThis.imagesCount = images.length;

    images.forEach(imgElement => {
        if (imgElement.tileType === CONST.IMAGECODE.player) {
            beginImageLoad(imgElement.tileType, imgElement.theFile, imageList);
        } else {
            loadWorldImages(imgElement.tileType, imgElement.theFile, imageList);
        }
    });
}

/**
 * Reduce the count of images globally by one.
 */
function reduceImageCountGlobally(): void {
    let counter = globalThis.imagesCount;
    counter--;
    globalThis.imagesCount = counter;
}

/**
 * Load player image into network image list.
 * @param tileType Image code for image to be loaded
 * @param fileName File name for image to be loaded
 * @param imgList List of network images (reference)
 */
function beginImageLoad(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType].onload = reduceImageCountGlobally;
    imgList[tileType].src = 'assets/main/' + fileName;
}

/**
 * Load all world images into network image list.
 * @param tileType Image code for image to be loaded
 * @param fileName File name for image to be loaded
 * @param imgList List of network images (reference)
 */
function loadWorldImages(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType] = document.createElement('img');
    imgList[tileType].onload = reduceImageCountGlobally;
    imgList[tileType].src = 'assets/main/' + fileName;
}

// ===================================================================
// Tile Coordinations
// ===================================================================

/**
 * Get the index of a tile within the grid given the x and y positions.
 * @param xPos The x position of the tile.
 * @param yPos The y position of the tile.
 * @returns The index of the tile within the grid.
 */
export function getTileAtCoordinates(xPos: number, yPos: number): number {
    const col = Math.floor(xPos / CONST.GAME.images.width);
    const row = Math.floor(yPos / CONST.GAME.images.height);
    const index = rowAndColArrayIndexed(col, row);

    if ((col >= 0) && (col < CONST.GAME.images.columns) &&
        (row >= 0) && (row < CONST.GAME.images.rows)) {
        return index;
    }
}

/**
 * Index the row and col array intersection.
 * @param col The col number to index.
 * @param row The row number to index.
 * @returns An indexed position where the row and column intersect.
 */
function rowAndColArrayIndexed(col: number, row: number): number {
    return col + CONST.GAME.images.columns * row;
}
