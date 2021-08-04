import { Component, OnInit } from '@angular/core';
import { setupInputEvents } from 'src/app/Mechanics/controls';
import { draw, loadImages, resetCanvas } from 'src/app/Mechanics/gameCommon';
import { CONSTANTS } from 'src/app/Utils/Constants/constants';
import { Canvas } from 'src/app/Utils/Models/Canvas';
import { Character } from 'src/app/Utils/Models/character';
import { LEVELS } from 'src/app/Utils/Models/levels';

@Component({
  selector: 'dvt-main-game-canvas',
  templateUrl: './main-game-canvas.component.html',
  styleUrls: ['./main-game-canvas.component.less']
})
export class MainGameCanvasComponent implements OnInit {

  // Canvas
  canvas: Canvas = {};

  // Character
  character: Character;

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

    this.character = new Character('Employee', 75, 75, 'character.png');

    this.getCanvasDetails();
    resetCanvas(this.canvas.canvas, this.canvas.context2D, CONSTANTS.canvas.color.reset, CONSTANTS.canvas.text.loading, CONSTANTS.canvas.color.loading);
    loadImages(this.imageList);
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
          draw(this.canvas.context2D, this.grid, this.imageList, this.character);
      }

      if (globalThis.loadLevel) {
        this.loadLevel();
        globalThis.loadLevel = false;
      }

    }, 1000 / CONSTANTS.game.fps); // End of setInterval
    this.loadLevel();
  }

    /**
   * This function loads the current level.
   * @param level The current level that needs to be loaded.
   */
     loadLevel() {
  
      setupInputEvents(this.character);
      this.character.reset(this.grid);
      this.grid = LEVELS[this.currentLevel];
      if (this.grid === undefined) {
        this.grid = [];
      }
      this.character.grid = this.grid;
  
      if (this.currentLevel < LEVELS.length) {
        this.currentLevel++;
      } else {  
        this.character.stopMoving();
        globalThis.imagesCount = 1;
      }  
    }

}
