import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setController } from 'src/app/State/controller/controller.actions';
import { ControllerState } from 'src/app/State/controller/controller.reducer';
import { iController, iDefaultController } from 'src/app/Utils/Models';

@Component({
  selector: 'dvt-gameboy',
  templateUrl: './gameboy.component.html',
  styleUrls: ['./gameboy.component.scss']
})
export class GameboyComponent {

  usageController: iController = { ...iDefaultController };

  navigateTo: string = '';

  constructor(
    private controllerStore: Store<ControllerState>,
    private router: Router,
  ) { }

  buttonStateChange(button: string): void {
    this.usageController = { ...iDefaultController };
    this.navigateTo = '';
    switch (button) {
      // Up Buttons
      case 'r-up':
        this.usageController.rightButtonsUp = true;
        break;
      case 'l-up':
        this.usageController.leftButtonsUp = true;
        break;
      // Left Buttons
      case 'r-left':
        this.usageController.rightButtonsLeft = true;
        break;
      case 'l-left':
        this.usageController.leftButtonsLeft = true;
        break;
      // Right Buttons
      case 'r-right':
        this.usageController.rightButtonsRight = true;
        break;
      case 'l-right':
        this.usageController.leftButtonsRight = true;
        break;
      // Down Buttons
      case 'r-down':
        this.usageController.rightButtonsDown = true;
        break;
      case 'l-down':
        this.usageController.leftButtonsDown = true;
        break;
      // Other Buttons
      case 'options':
        this.usageController.options = true;
        this.navigateTo = 'options';
        break;
      case 'start':
        this.usageController.start = true;
        break;
      case 'theme':
        this.usageController.theme = true;
        this.navigateTo = 'options/theme';
        break;
    }
    if (this.navigateTo !== '') {
      this.navigate();
    }
    this.controllerStore.dispatch(setController({ controller: this.usageController }));
  }

  private navigate(): void {
    this.router.navigate([`/${this.navigateTo}`]);
  }

}
