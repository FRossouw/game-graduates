import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMenuSelection } from 'src/app/State/menu/menu.actions';
import { MenuState } from 'src/app/State/menu/menu.reducer';
import { MenuContactUs } from 'src/app/Utils/Constants/menuItems';
import { iMenuItem, iDefaultMenu } from 'src/app/Utils/Models';

@Component({
  selector: 'dvt-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  menuItems: iMenuItem[] = MenuContactUs;

  constructor(private menuStore: Store<MenuState>) { }

  ngOnInit(): void {
    const menu = { ...iDefaultMenu };
    menu.contactUs = true;
    this.menuStore.dispatch(setMenuSelection({ menu }));
  }


}
