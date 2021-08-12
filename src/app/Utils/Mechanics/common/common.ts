import { Canvas } from './../models/models';
import * as CONST from '../constants/constants';

// ===================================================================
// Canvas and Context
// ===================================================================

export function getCanvasContext2d(canvas: Canvas): Canvas {
    canvas.canvas = document.getElementById(canvas.htmlID);
    canvas.context2D = canvas.canvas.getContext('2d');
    return canvas;
}

// ===================================================================
// Loading Images
// ===================================================================

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

function countImagesToLoad(): void {
    let counter = globalThis.imagesCount;
    counter--;
    globalThis.imagesCount = counter;
}

function beginImageLoad(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType].onload = countImagesToLoad;
    imgList[tileType].src = 'assets/main/' + fileName;
}

function loadWorldImages(tileType: number, fileName: string, imgList: any[]): void {
    imgList[tileType] = document.createElement('img');
    imgList[tileType].onload = countImagesToLoad;
    imgList[tileType].src = 'assets/main/' + fileName;
}

export function getTileAtCoordinates(xPos: number, yPos: number): number {
    const col = Math.floor(xPos / CONST.GAME.images.width);
    const row = Math.floor(yPos / CONST.GAME.images.height);
    const index = rowAndColArrayIndexed(col, row);

    if ((col >= 0) && (col < CONST.GAME.images.columns) &&
        (row >= 0) && (row < CONST.GAME.images.rows)) {
        return index;
    }
}

function rowAndColArrayIndexed(col: number, row: number): number {
    return col + CONST.GAME.images.columns * row;
}