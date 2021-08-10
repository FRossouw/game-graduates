import { GameCanvas } from '../Models/gameCanvas';

export function drawRectangle(
    gameCanvas: GameCanvas,
    topX: number,
    topY: number,
    width: number,
    height: number,
    color: string
): void {
    gameCanvas.context2D.fillStyle = color;
    gameCanvas.context2D.fillRect(topX, topY, width, height);
}

export function drawCircle(
    gameCanvas: GameCanvas,
    centerX: number,
    centerY: number,
    radius: number,
    color: string,
    antiClockwise: boolean = true
): void {
    gameCanvas.context2D.fillStyle = color;
    gameCanvas.context2D.beginPath();
    gameCanvas.context2D.arc(centerX, centerY, radius, 0, Math.PI * 2, antiClockwise);
    gameCanvas.context2D.fill();
}
