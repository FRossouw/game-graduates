import { Component, OnInit } from '@angular/core';
import * as GameMechanics from 'src/app/Utils/Game Mechanics/index';

@Component({
  selector: 'dvt-main-game-canvas-two',
  templateUrl: './main-game-canvas-two.component.html',
  styleUrls: ['./main-game-canvas-two.component.less']
})
export class MainGameCanvasTwoComponent implements OnInit {

  // Canvas and Context
  gameCanvas: GameMechanics.GameCanvas = {
    canvas: null,
    context2D: null
  };

  // Character
  character: GameMechanics.Character;

  brickGrid =
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1,
      1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
      1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit(): void {
    this.character = new GameMechanics.Character(GameMechanics.CONSTANTS.character.speed);
    this.gameCanvas = GameMechanics.getCanvasContext2d('gameCanvas', this.gameCanvas);
    
    GameMechanics.setUpInputEvents(this.character);
    this.renderGame();
  }

  renderGame(): void {
    // Setting up game logic and rendering our content (FPS)
    setInterval(() => {
      this.moveGame();
      this.drawGame();
    }, 1000 / GameMechanics.CONSTANTS.game.framesPerSecond);
    this.character.reset(this.gameCanvas);
  }

  moveGame(): void {
    this.character.move(this.brickGrid);
    this.character.cameraFollow(this.gameCanvas);
  }

  drawGame(): void {
    // Reset the canvas (it should not scroll)
    GameMechanics.drawRectangle(this.gameCanvas, 0, 0, this.gameCanvas.canvas.width, this.gameCanvas.canvas.height, 'black');
    this.gameCanvas.context2D.save();
    // Drawings need to be translated
    this.gameCanvas.context2D.translate(-this.character.camPanX, -this.character.camPanY);
    // Draw only images visible on screen
    GameMechanics.drawOnScreenOnlyBricks(this.gameCanvas, this.character, this.brickGrid);
    // Draw the Character
    GameMechanics.drawCircle(this.gameCanvas, this.character.positionX, this.character.positionY, 10, 'white');
    // Restore the canvas (Undoes the translate used for scrolling)
    this.gameCanvas.context2D.restore();
  }

}
