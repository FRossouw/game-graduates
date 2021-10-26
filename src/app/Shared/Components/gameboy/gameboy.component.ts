import { Component } from '@angular/core';
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

  event = document.createEvent('KeyboardEvent');

  constructor(private gameStore: Store<GameState>) { }

  buttonStateChange(button: string): void {
    this.usageController = { ...this.defaultController };
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
        break;
      case 'start':
        this.usageController.buttonStart = true;
        break;
      case 'theme':
        this.usageController.buttonTheme = true;
        break;
    }
    this.gameStore.dispatch(setControllerButton({ controller: this.usageController }));
    this.resetButtonStates();
  }

  private resetButtonStates(): void {
    this.usageController = { ...this.defaultController };
    this.gameStore.dispatch(setControllerButton({ controller: this.usageController }));
  }

}
