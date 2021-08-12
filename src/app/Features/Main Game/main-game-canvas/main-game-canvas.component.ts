import { Component, OnInit } from '@angular/core';
import { IMAGECODE } from 'src/app/Utils/Mechanics/constants/images';
import { Player } from 'src/app/Utils/Mechanics/models/player';
import * as Mechanics from '../../../Utils/Mechanics/index';

@Component({
  selector: 'dvt-main-game-canvas',
  templateUrl: './main-game-canvas.component.html',
  styleUrls: ['./main-game-canvas.component.less']
})
export class MainGameCanvasComponent implements OnInit {

  // Canvas
  canvas: Mechanics.Models.Canvas = { htmlID: 'gameCanvas', canvas: null, context2D: null, positions: { topX: 0, topY: 0 } };

  // Images
  imagesList = [];
  imagesCounted = 0;

  // Character
  player: Player = {
    name: 'Francois'
  } as Player;
  character: Mechanics.Models.Character;

  // Grid
  level =
    [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
    ];

  ngOnInit(): void {
    this.globalLoading();
    this.canvas = Mechanics.Graphics.getCanvasContext2d(this.canvas);
    this.character = new Mechanics.Models.Character(this.player, Mechanics.CONST.CHARACTER.walking);
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
    this.character.move(this.level); // Tile collision Missing
    this.character.cameraFollowCharacter(this.canvas);
  }

  drawMechanics(): void {
    Mechanics.Draw.drawRectangle(this.canvas, 'red'); // Resets the canvas untranslates
    this.canvas.context2D.save();
    this.canvas.context2D.translate(-this.character.camera.panX, -this.character.camera.panY);
    Mechanics.Draw.drawOnScreenImagesOnly(this.canvas, this.character, this.level, this.imagesList);
    // Draw images
    this.character.drawCharacter(this.canvas, this.imagesList, IMAGECODE.player);
    // Draw character
    this.canvas.context2D.restore();
  }

}
