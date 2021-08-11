import { Component, OnInit } from '@angular/core';
import * as Mechanics from '../../../Utils/Mechanics/index';

@Component({
  selector: 'dvt-main-game-canvas-three',
  templateUrl: './main-game-canvas-three.component.html',
  styleUrls: ['./main-game-canvas-three.component.less']
})
export class MainGameCanvasThreeComponent implements OnInit {

  // Canvas
  canvas: Mechanics.Models.Canvas = {
    htmlID: 'gameCanvas',
    canvas: null,
    context2D: null,
    positions: { topX: 0, topY: 0 }
  };

  // Images
  imagesList = [];
  imagesCounted = 0;

  // Character
  character: Mechanics.Models.Character;

  grid =
    [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];

  constructor() { }

  ngOnInit(): void {
    this.globalLoading();
    this.canvas = Mechanics.Graphics.getCanvasContext2d(this.canvas);
    this.character = new Mechanics.Models.Character('character.png', 'Francois', Mechanics.CONST.CHARACTER.walking);
    Mechanics.Graphics.loadImages(this.imagesList);
    Mechanics.Graphics.setUpInputs(this.character);
    this.startGame();
  }

  globalLoading(): void {
    globalThis.loadLevel = false;
    globalThis.imagesCount = this.imagesCounted;
  }

  startGame(): void {
    setInterval(() => {
      if (globalThis.imagesCount === 0) {
        this.moveMechanics();
        this.drawMechanics();
      }

    }, 1000 / Mechanics.CONST.GAME.framesPerSecond);
  }

  moveMechanics(): void {
    this.character.move(this.grid); // Tile collision Missing
    this.character.cameraFollow();
  }

  drawMechanics(): void {
    Mechanics.Draw.drawRectangle(this.canvas, 'red'); // Resets the canvas untranslates
    this.canvas.context2D.save();
    this.canvas.context2D.translate(-this.character.camera.panX, -this.character.camera.panY);
    Mechanics.Draw.drawOnScreenImagesOnly(this.canvas, this.character, this.grid, this.imagesList);
    // Draw images
    this.character.drawCharacter(this.canvas, this.imagesList);
    // Draw character
    this.canvas.context2D.restore();
  }

}
