import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setController } from 'src/app/State/controller/controller.actions';
import { ControllerState } from 'src/app/State/controller/controller.reducer';
import { selectController } from 'src/app/State/controller/controller.selectors';
import { setMenuSelection } from 'src/app/State/menu/menu.actions';
import { MenuState } from 'src/app/State/menu/menu.reducer';
import { selectMenuSelection } from 'src/app/State/menu/menu.selectors';
import { MenuMainMenu } from 'src/app/Utils/Constants/menuItems';
import { KEYBOARDCODES } from 'src/app/Utils/Mechanics/constants/constants';
import { iController, iDefaultController, iDefaultMenu, iMenu, iMenuItem } from 'src/app/Utils/Models';

@Component({
  selector: 'dvt-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems: iMenuItem[] = MenuMainMenu;

  constructor(private menuStore: Store<MenuState>) { }

  ngOnInit(): void {
    const menu = { ...iDefaultMenu };
    menu.mainMenu = true;
    this.menuStore.dispatch(setMenuSelection({ menu }));
  }

}
