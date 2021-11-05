import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setController } from 'src/app/State/controller/controller.actions';
import { ControllerState } from 'src/app/State/controller/controller.reducer';
import { selectController } from 'src/app/State/controller/controller.selectors';
import { setMenuSelection } from 'src/app/State/menu/menu.actions';
import { MenuState } from 'src/app/State/menu/menu.reducer';
import { selectMenuSelection } from 'src/app/State/menu/menu.selectors';
import { MenuMainMenu } from 'src/app/Utils/Constants/menuItems';
import { KEYBOARDCODES } from 'src/app/Utils/Mechanics/constants/inputKeys';
import { iController, iDefaultController, iMenu, iDefaultMenu, iMenuItem } from 'src/app/Utils/Models';

@Component({
  selector: 'dvt-menu-generator',
  templateUrl: './menu-generator.component.html',
  styleUrls: ['./menu-generator.component.scss']
})
export class MenuGeneratorComponent implements OnInit {

  @Input() menuHeader: string;
  @Input() set menuItemsInput(items: iMenuItem[]) {
    this.menuItems = items;
  }

  defaultMenuItems: iMenu;

  index = 0;
  menuItemCount = 0;

  currentController: iController = { ...iDefaultController };

  currentMenu: iMenu = { ...iDefaultMenu };

  menuItems: iMenuItem[] = MenuMainMenu;

  /**
   * A Constructor for the Menu Generator
   * @param router A service that provides navigation among views and URL manipulation capabilities.
   * @param controllerStore A store that handles the state of the controller component.
   * @param menuStore A store that handles the state of the menu.
   */
  constructor(
    private router: Router,
    private controllerStore: Store<ControllerState>,
    private menuStore: Store<MenuState>
  ) { }

  /**
   * The callback method for the component initializer.
   */
  ngOnInit(): void {
    this.resetCounters();
    document.addEventListener('keydown', (evt) => { this.keyPressed(evt); });
    this.menuStore.select(selectMenuSelection).subscribe(m => { this.currentMenu = { ...m }; });
    this.controllerStore.select(selectController).subscribe(c => {
      if (
        this.currentMenu.mainMenu ||
        this.currentMenu.options ||
        this.currentMenu.contactUs
      ) {
        // Retrieve current controller controls
        this.currentController = { ...c };
        // Check movement whether up or down for menu items
        if (this.currentController.leftButtonsUp) { this.moveMenu(true, false); }
        if (this.currentController.leftButtonsDown) { this.moveMenu(false, true); }
        // Determing which menu item is selected and Navigate
        this.determineSelected();
        if (this.currentController.start) {
          this.currentMenu = { ...iDefaultMenu };
          this.navigate(this.menuItems[this.index].link);
          this.controllerStore.dispatch(setController({ controller: iDefaultController }));
        }
        if (this.currentController.options) {
          this.currentMenu = { ...iDefaultMenu };
          this.currentMenu.options = true;
          this.setMenuSelection(this.currentMenu);
          this.controllerStore.dispatch(setController({ controller: iDefaultController }));
          this.navigate('options');
        }
      }
    });

  }

  /**
   * Reset which menu item is selected and how many menu items there are on the current menu.
   */
  private resetCounters(): void {
    this.index = 0;
    this.menuItemCount = this.menuItems?.length > 0 ? this.menuItems.length - 1 : 0;
  }

  /**
   * A method that invokes when any button on the keyboard is pressed.
   * @param evt A keyboard event that is triggered when a button is pressed.
   */
  private keyPressed(evt: KeyboardEvent): void {
    if (evt.code === KEYBOARDCODES.KeyEnter.key || evt.code === KEYBOARDCODES.KeyEnterNumpad.key) {
      this.navigate(this.menuItems[this.index].link);
    }
    if (evt.code === KEYBOARDCODES.KeyArrowUp.key) { this.moveMenu(true, false); }
    if (evt.code === KEYBOARDCODES.KeyArrowDown.key) { this.moveMenu(false, true); }
    this.determineSelected();
  }

  /**
   * A method which detemines in which direction the menu selector needs to move.
   * If both selectors are set to true, the method will reset to move down.
   * @param up Should the menu selector move up = true else false.
   * @param down Should the menu selector move down = true else false.
   */
  private moveMenu(up: boolean, down: boolean): void {
    if (up && !down) {
      this.index = this.index === 0 ? this.menuItemCount : this.index - 1;
    }
    if ((!up && down) || (up && down)) {
      this.index = this.index === this.menuItemCount ? 0 : this.index + 1;
    }
  }

  /**
   * Sets the menu within the state to the menu provided.
   * @param menu The current menu that is selected.
   */
  private setMenuSelection(menu: iMenu): void {
    this.menuStore.dispatch(setMenuSelection({ menu }));
  }

  /**
   * A method which determins which menu item is currently selected.
   */
  private determineSelected(): void {
    this.menuItems.forEach(mi => {
      mi.selected = false;
    });
    this.menuItems[this.index].selected = true;
  }

  /**
   * A method to navigate to a custom route (Exaple: to a menu item).
   * @param route A route where the application needs to navifate to.
   */
  private navigate(route: string): void {
    this.controllerStore.dispatch(setController({ controller: iDefaultController }));
    this.router.navigate([`/${route}`]);
  }

}
