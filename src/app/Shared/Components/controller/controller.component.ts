import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setControllerButton } from 'src/app/Store/actions/gameActions';
import { GameState } from 'src/app/Store/reducers/game.Reducer';

@Component({
  selector: 'dvt-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  event = document.createEvent('KeyboardEvent');

  constructor(private gameStore: Store<GameState>) { }

  ngOnInit(): void {
  }

  buttonStateChange(button: string): void {
    switch (button) {
      case 'up':
        this.gameStore.dispatch(setControllerButton({ buttonUp: true }));
        this.resetButtonStates();
        break;
      case 'left':
        this.gameStore.dispatch(setControllerButton({ buttonLeft: true }));
        this.resetButtonStates();
        break;
      case 'right':
        this.gameStore.dispatch(setControllerButton({ buttonRight: true }));
        this.resetButtonStates();
        break;
      case 'down':
        this.gameStore.dispatch(setControllerButton({ buttonDown: true }));
        this.resetButtonStates();
        break;
      case 'options':
        this.gameStore.dispatch(setControllerButton({ buttonOptions: true }));
        this.resetButtonStates();
        break;
      case 'start':
        this.gameStore.dispatch(setControllerButton({ buttonStart: true }));
        this.resetButtonStates();
        break;
      case 'select':
        this.gameStore.dispatch(setControllerButton({ buttonSelect: true }));
        this.resetButtonStates();
        break;
      case 'triangle':
        this.gameStore.dispatch(setControllerButton({ buttonTriangle: true }));
        this.resetButtonStates();
        break;
      case 'square':
        this.gameStore.dispatch(setControllerButton({ buttonSquare: true }));
        this.resetButtonStates();
        break;
      case 'circle':
        this.gameStore.dispatch(setControllerButton({ buttonCircle: true }));
        this.resetButtonStates();
        break;
      case 'xmark':
        this.gameStore.dispatch(setControllerButton({ buttonX: true }));
        this.resetButtonStates();
        break;
    }
  }

  resetButtonStates(): void {
    this.gameStore.dispatch(setControllerButton({ buttonUp: false }));
    this.gameStore.dispatch(setControllerButton({ buttonLeft: false }));
    this.gameStore.dispatch(setControllerButton({ buttonRight: false }));
    this.gameStore.dispatch(setControllerButton({ buttonDown: false }));
    this.gameStore.dispatch(setControllerButton({ buttonOptions: false }));
    this.gameStore.dispatch(setControllerButton({ buttonStart: false }));
    this.gameStore.dispatch(setControllerButton({ buttonSelect: false }));
    this.gameStore.dispatch(setControllerButton({ buttonTriangle: false }));
    this.gameStore.dispatch(setControllerButton({ buttonSquare: false }));
    this.gameStore.dispatch(setControllerButton({ buttonCircle: false }));
    this.gameStore.dispatch(setControllerButton({ buttonX: false }));
  }

}
