import { Canvas } from "./../models/models";
import * as CONST from '../constants/constants'

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
