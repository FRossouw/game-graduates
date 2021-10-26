import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setControllerButton, setMenuSelection } from 'src/app/Store/actions/gameActions';
import { Controller, MenuSelection } from 'src/app/Store/models';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getControllerButton, getMenuSelection } from 'src/app/Store/selectors/game.Selectors';
import { KEYBOARDCODES } from 'src/app/Utils/Mechanics/constants/constants';
import { MainMenuItems } from '../models/main-menu';

@Component({
  selector: 'dvt-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  index = 0;

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
  currentController = { ...this.defaultController };

  currentMenuDefault: MenuSelection = {
    contactUs: false,
    leaderboards: false,
    mainGame: false,
    mainMenu: false,
    options: false,
    tutorial: false
  };
  currentMenu = { ...this.currentMenuDefault };

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
    this.gameStore.select(getMenuSelection).subscribe(m => { this.currentMenu = { ...m }; });

    this.gameStore.select(getControllerButton).subscribe(c => {
      if (this.currentMenu.mainMenu) {
        this.currentController = { ...c };

        if (this.currentController.buttonLUp) { this.moveUp(); }
        if (this.currentController.buttonLDown) { this.moveDown(); }

        this.determineSelected();

        if (this.currentController.buttonStart) {
          this.currentMenu = { ...this.currentMenuDefault };
          this.navigate(this.menuItems[this.index].link);
          this.gameStore.dispatch(setControllerButton({ controller: this.defaultController }));
        }

        if (this.currentController.buttonOptions) {
          this.currentMenu = { ...this.currentMenuDefault };
          this.currentMenu.options = true;
          this.gameStore.dispatch(setMenuSelection({ menu: this.currentMenu }));
          this.gameStore.dispatch(setControllerButton({ controller: this.defaultController }));
          this.navigate('options');
        }

      }
    });
  }

  private moveUp(): void {
    this.index = this.index === 0 ? 4 : this.index - 1;
  }

  private moveDown(): void {
    this.index = this.index === 4 ? 0 : this.index + 1;
  }

  private determineSelected(): void {
    this.menuItems.forEach(mi => {
      mi.selected = false;
    });
    this.menuItems[this.index].selected = true;
  }

  private keyPressed(evt: KeyboardEvent): void {
    if (evt.code === KEYBOARDCODES.KeyEnter.key || evt.code === KEYBOARDCODES.KeyEnterNumpad.key) {
      this.navigate(this.menuItems[this.index].link);
    }
    if (evt.code === KEYBOARDCODES.KeyArrowUp.key) { this.moveUp(); }
    if (evt.code === KEYBOARDCODES.KeyArrowDown.key) { this.moveDown(); }
    this.determineSelected();
  }

  private navigate(route: string): void {
    this.gameStore.dispatch(setControllerButton({ controller: this.defaultController }));
    this.router.navigate([`/${route}`]);
  }

}
