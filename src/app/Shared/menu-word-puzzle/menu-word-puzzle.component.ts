import { Component, OnInit } from '@angular/core';
import { Mathematical } from 'src/app/Utils/Methods';
import { MENU_CONSTANTS, MENU_MECHANICS, MENU_MODELS } from '../Utils/menu-word-puzzle';

@Component({
  selector: 'dvt-menu-word-puzzle',
  templateUrl: './menu-word-puzzle.component.html',
  styleUrls: ['./menu-word-puzzle.component.scss']
})
export class MenuWordPuzzleComponent implements OnInit {

  menu: MENU_MODELS.Menu[] = [];
  menuWordPuzzle: MENU_MECHANICS.MenuWordPuzzle;

  constructor() { }

  ngOnInit(): void {
    this.menuWordPuzzle = new MENU_MECHANICS.MenuWordPuzzle(6, MENU_CONSTANTS.MENU_LANGUAGES.Afrikaans);
    this.menu = this.menuWordPuzzle.menu;
  }

  isNumber(character: string | number): boolean {
    const nnb = Mathematical.isCharacterNumber(character);
    console.log(nnb);
    return nnb;
  }

}
