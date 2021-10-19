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

  constructor(private gameStore: Store<GameState>) { }

  ngOnInit(): void {
  }

  buttonStateChange(button: string): void {
    switch (button) {
      case 'up':
        this.gameStore.dispatch(setControllerButton({ buttonUp: true }));
        break;
      case 'left':
        this.gameStore.dispatch(setControllerButton({ buttonLeft: true }));
        break;
      case 'right':
        this.gameStore.dispatch(setControllerButton({ buttonRight: true }));
        break;
      case 'down':
        this.gameStore.dispatch(setControllerButton({ buttonDown: true }));
        break;
      case 'options':
        this.gameStore.dispatch(setControllerButton({ buttonOptions: true }));
        break;
      case 'start':
        this.gameStore.dispatch(setControllerButton({ buttonStart: true }));
        break;
      case 'select':
        this.gameStore.dispatch(setControllerButton({ buttonSelect: true }));
        break;
      case 'triangle':
        this.gameStore.dispatch(setControllerButton({ buttonTriangle: true }));
        break;
      case 'square':
        this.gameStore.dispatch(setControllerButton({ buttonSquare: true }));
        break;
      case 'circle':
        this.gameStore.dispatch(setControllerButton({ buttonCircle: true }));
        break;
      case 'xmark':
        this.gameStore.dispatch(setControllerButton({ buttonX: true }));
        break;
    }
  }

}
