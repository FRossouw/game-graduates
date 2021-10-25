import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setControllerButton } from 'src/app/Store/actions/gameActions';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getControllerButton } from 'src/app/Store/selectors/game.Selectors';
import { KEYBOARDCODES } from 'src/app/Utils/Mechanics/constants/constants';
import { MainMenuItems } from '../models/main-menu';

@Component({
  selector: 'dvt-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  index = 0;

  menuItems: MainMenuItems[] = [
    { name: 'Play Game', link: 'play-game', selected: true },           // 0
    { name: 'Tutorial', link: 'tutorial', selected: false },            // 1
    { name: 'Leaderboards', link: 'leaderboards', selected: false },    // 2
    { name: 'Contact Us', link: 'contact-us', selected: false },        // 3
    { name: 'Options', link: 'options', selected: false }               // 4
  ];

  constructor(
    private router: Router,
    private gameStore: Store<GameState>
  ) { }

  ngOnInit(): void {
    document.addEventListener('keydown', (evt) => { this.keyPressed(evt); });

    this.gameStore.select(getControllerButton).subscribe(c => {
      if (c.buttonUp) { this.moveUp(); }
      if (c.buttonDown) { this.moveDown(); }
      this.determineSelected();
      if (c.buttonStart ) { 
        this.navigate(this.menuItems[this.index].link);
        this.gameStore.dispatch(setControllerButton({ buttonStart: false }));
      };
      if (c.buttonOptions ) { 
        this.navigate('options');
        this.gameStore.dispatch(setControllerButton({ buttonOptions: false }));
      };
    });
  }

  moveUp(): void {
    this.index = this.index === 0 ? 4 : this.index - 1;
  }

  moveDown(): void {
    this.index = this.index === 4 ? 0 : this.index + 1;
  }

  determineSelected(): void {
    this.menuItems.forEach(mi => {
      mi.selected = false;
    });
    this.menuItems[this.index].selected = true;
  }

  keyPressed(evt: KeyboardEvent): void {
    if (evt.code === KEYBOARDCODES.KeyEnter.key || evt.code === KEYBOARDCODES.KeyEnterNumpad.key) {
      this.navigate(this.menuItems[this.index].link);
    }
    if (evt.code === KEYBOARDCODES.KeyArrowUp.key) { this.moveUp(); }
    if (evt.code === KEYBOARDCODES.KeyArrowDown.key) { this.moveDown(); }
    this.determineSelected();
  }

  navigate(route: string): void {
    this.router.navigate([`/${route}`]);
  }

}