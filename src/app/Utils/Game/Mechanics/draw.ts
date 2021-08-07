
/**
 * This function draws a rectangle on the canvas
 * @param canvasContext The canvas context where the rectangle needs to be drawn. This needs to be in 2d.
 * @param fillColor This is the color for the rectangle.
 * @param positionX This is the starting point at the most leftest top corner on the x-axis for the rectangle.
 * @param positionY The is the starting point at the most leftest top corner on the y-axis for the rectangle.
 * @param width This is the width of the rectangle.
 * @param height This is the heiht of the rectangle.
 */
export function drawRectangle(
    canvasContext: CanvasRenderingContext2D,
    fillColor: string,
    positionX: number,
    positionY: number,
    width: number,
    height: number
): void {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(positionX, positionY, width, height);
}

/**
 * This function draws text on the canvas.
 * @param canvasContext The canvas context where the text needs to be drawn. This needs to be in 2d.
 * @param text This is the text that will be displayed on the canvas.
 * @param positionX This is the starting point at the most leftest top corner of the x-axis for the text.
 * @param positionY This is the starting point at the most leftest top corner of the y-axis for the text.
 * @param fillColor This is the color the text will be when it is being displayed.
 */
export function drawText(
    canvasContext: CanvasRenderingContext2D,
    text: string, positionX: number,
    positionY: number,
    fillColor: string
): void {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(text, positionX, positionY);
}

/**
 * This function draws an image on the canvas.
 * @param canvasContext The canvas context where the image needs to be drawn. This needs to be in 2d.
 * @param image The image that needs to be drawn on the canvas.
 * @param positionX This is the starting point at the most leftest top corner of the -xaxis for the image.
 * @param positionY This is the starting point at the most leftest top corner of the y-axis for the image.
 * @param angle This is the angle the image needs to be rotated
 */
export function drawImageCenteredWithRotation(
    canvasContext: CanvasRenderingContext2D,
    image: CanvasImageSource,
    positionX: number,
    positionY: number,
    angle: number
): void {
    canvasContext.save();
    canvasContext.translate(positionX, positionY);
    canvasContext.rotate(angle);
    canvasContext.drawImage(image, - image.width / 2, - image.height / 2);
    canvasContext.restore();
}
