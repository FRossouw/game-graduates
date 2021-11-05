import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMenuSelection } from 'src/app/State/menu/menu.actions';
import { MenuState } from 'src/app/State/menu/menu.reducer';
import { MenuOptions } from 'src/app/Utils/Constants/menuItems';
import { iMenuItem, iDefaultMenu } from 'src/app/Utils/Models';

@Component({
  selector: 'dvt-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  menuItems: iMenuItem[] = MenuOptions;

  constructor(private menuStore: Store<MenuState>) { }

  ngOnInit(): void {
    const menu = { ...iDefaultMenu };
    menu.options = true;
    this.menuStore.dispatch(setMenuSelection({ menu }));
  }

}
