import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Preference } from 'src/app/Store/models';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getPreference } from 'src/app/Store/selectors/game.Selectors';
import { LocalstorageService } from 'src/app/Utils/Data Storage/Local/local-storage.service';
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
  preference: Preference;

  constructor(private storage: LocalstorageService, private gameStore: Store<GameState>) { }

  ngOnInit(): void {
    const selectedLanguage = this.storage.get('LANGUAGE') ? this.storage.get('LANGUAGE') : MENU_CONSTANTS.MENU_LANGUAGES.English;
    this.gameStore.select(getPreference).subscribe(p => {
      this.preference = p ? p : {
        Language: 0
      } as Preference;
      console.log(p);
      this.menuWordPuzzle = new MENU_MECHANICS.MenuWordPuzzle(6, this.preference.Language);
      this.menu = this.menuWordPuzzle.menu;
    });

  }

  isNumber(character: string | number): boolean {
    return Mathematical.isCharacterNumber(character);
  }

}
