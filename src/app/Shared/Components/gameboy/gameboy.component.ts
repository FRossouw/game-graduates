import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setControllerButton } from 'src/app/Store/actions/gameActions';
import { Controller } from 'src/app/Store/models';
import { GameState } from 'src/app/Store/reducers/game.Reducer';

@Component({
  selector: 'dvt-gameboy',
  templateUrl: './gameboy.component.html',
  styleUrls: ['./gameboy.component.scss']
})
export class GameboyComponent {

  defaultController: Controller = {
    buttonLLeft: false,
    buttonLRight: false,
    buttonLDown: false,
    buttonLUp: false,
    buttonRLeft: false,
    buttonRRight: false,
    buttonRDown: false,
    buttonRUp: false,
    buttonAnalogLeft: false,
    buttonAnalogRight: false,
    buttonOptions: false,
    buttonStart: false,
    buttonTheme: false
  };
  usageController = { ...this.defaultController };

  navigateTo: string = '';

  constructor(
    private router: Router,
    private gameStore: Store<GameState>
    ) { }

  buttonStateChange(button: string): void {
    this.usageController = { ...this.defaultController };
    this.navigateTo = '';
    switch (button) {
      // Up Buttons
      case 'r-up':
        this.usageController.buttonRUp = true;
        break;
      case 'l-up':
        this.usageController.buttonLUp = true;
        break;
      // Left Buttons
      case 'r-left':
        this.usageController.buttonRLeft = true;
        break;
      case 'l-left':
        this.usageController.buttonLLeft = true;
        break;
      // Right Buttons
      case 'r-right':
        this.usageController.buttonRRight = true;
        break;
      case 'l-right':
        this.usageController.buttonLRight = true;
        break;
      // Down Buttons
      case 'r-down':
        this.usageController.buttonRDown = true;
        break;
      case 'l-down':
        this.usageController.buttonLDown = true;
        break;
      // Other Buttons
      case 'options':
        this.usageController.buttonOptions = true;
        this.navigateTo = 'options';
        break;
      case 'start':
        this.usageController.buttonStart = true;
        break;
      case 'theme':
        this.usageController.buttonTheme = true;
        this.navigateTo = 'options/theme';
        break;
    }
    if (this.navigateTo !== '') {
      this.navigate();
    }
    this.gameStore.dispatch(setControllerButton({ controller: this.usageController }));
  }

  private navigate(): void {
    this.router.navigate([`/${this.navigateTo}`]);
  }

}
