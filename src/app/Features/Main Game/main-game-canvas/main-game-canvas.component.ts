import { Component, OnInit } from '@angular/core';
import * as Mechanics from 'src/app/Utils/Game';
import { Canvas } from 'src/app/Utils/Models/canvas';

@Component({
  selector: 'dvt-main-game-canvas',
  templateUrl: './main-game-canvas.component.html',
  styleUrls: ['./main-game-canvas.component.less']
})
export class MainGameCanvasComponent implements OnInit {

  // Canvas
  canvas: Canvas = {
    canvas: null,
    context2D: null
  };

  // Character
  character: Mechanics.Character;

  // Images
  imageList = [];
  imagesCounted = 0;

  // Map and Grid
  grid: number[] = [];
  currentLevel = 0;

  /**
   * The default constructor for the game
   */
  constructor() { }

  /**
   * This function initializes the game
   */
  ngOnInit(): void {
    globalThis.loadLevel = false;
    globalThis.imagesCount = this.imagesCounted;

    this.character = new Mechanics.Character('Employee', 75, 75, 'character.png', Mechanics.CONSTANTS.character.speed);

    this.getCanvasDetails();
    Mechanics.resetCanvas(
      this.canvas.canvas,
      this.canvas.context2D,
      Mechanics.CONSTANTS.canvas.color.reset,
      Mechanics.CONSTANTS.canvas.text.loading,
      Mechanics.CONSTANTS.canvas.color.loading
    );
    Mechanics.loadImages(this.imageList);
    this.startGame();
  }

  /**
   * This function retrieves the canvas details
   */
  getCanvasDetails(): void {
    this.canvas.canvas = document.getElementById('gameCanvas');
    this.canvas.context2D = this.canvas.canvas.getContext('2d');
  }

  /**
   * This function starts the game once all the images are loaded
   */
  startGame(): void {
    setInterval(() => {
      // All images are loaded
      if (globalThis.imagesCount === 0) {
        this.character.move(this.grid);
        Mechanics.draw(this.canvas.context2D, this.grid, this.imageList, this.character);
      }

      if (globalThis.loadLevel) {
        this.loadLevel();
        globalThis.loadLevel = false;
      }

    }, 1000 / Mechanics.CONSTANTS.game.fps); // End of setInterval
    this.loadLevel();
  }

  /**
   * This function loads the current level.
   * @param level The current level that needs to be loaded.
   */
  loadLevel(): void {

    Mechanics.setupInputEvents(this.character);
    this.character.reset(this.grid);
    this.grid = Mechanics.LEVELS[this.currentLevel];
    if (this.grid === undefined) {
      this.grid = [];
    }
    this.character.grid = this.grid;

    if (this.currentLevel < Mechanics.LEVELS.length) {
      this.currentLevel++;
    } else {
      this.character.stopMoving();
      globalThis.imagesCount = 1;
    }
  }

}
