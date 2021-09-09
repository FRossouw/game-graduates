import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getLanguagePreference } from 'src/app/Store/selectors/game.Selectors';
import { LocalstorageService } from 'src/app/Utils/Data Storage/Local/local-storage.service';
import { Mathematical, Randomizer } from 'src/app/Utils/Methods';
import { MENU_CONSTANTS, MENU_MECHANICS, MENU_MODELS } from '../Utils/menu-word-puzzle';

@Component({
  selector: 'dvt-menu-word-puzzle',
  templateUrl: './menu-word-puzzle.component.html',
  styleUrls: ['./menu-word-puzzle.component.scss']
})
export class MenuWordPuzzleComponent implements OnInit {

  menu: MENU_MODELS.Menu[] = [];
  menuWordPuzzle: MENU_MECHANICS.MenuWordPuzzle;
  language: number = 3;

  constructor(private storage: LocalstorageService, private gameStore: Store<GameState>) { }

  ngOnInit(): void {
    const selectedLanguage = this.storage.get('LANGUAGE') ? this.storage.get('LANGUAGE') : MENU_CONSTANTS.MENU_LANGUAGES.English;
    this.gameStore.select(getLanguagePreference).subscribe(l => {
      this.language = l;
      this.menuWordPuzzle = new MENU_MECHANICS.MenuWordPuzzle(6, this.language);
      this.menu = this.menuWordPuzzle.menu;
    });

  }

  isNumber(character: string | number): boolean {
    return Mathematical.isCharacterNumber(character);
  }

}
