import { Component, OnInit } from '@angular/core';
import { Mathematical, Randomizer } from 'src/app/Utils/Methods';
import { MENU_MECHANICS, MENU_MODELS } from '../Utils/menu-word-puzzle';

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
    const randomLang = Randomizer(2);
    this.menuWordPuzzle = new MENU_MECHANICS.MenuWordPuzzle(6, randomLang);
    this.menu = this.menuWordPuzzle.menu;
  }

  isNumber(character: string | number): boolean {
    return Mathematical.isCharacterNumber(character);
  }

}
