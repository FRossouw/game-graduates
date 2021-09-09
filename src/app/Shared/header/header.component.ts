import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLanguagePreference } from 'src/app/Store/actions/gameActions';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { Themes, ThemeToggleService } from 'src/app/Utils/Theme/theme-toggle.service';
import { MENU_CONSTANTS } from '../Utils/menu-word-puzzle';

@Component({
  selector: 'dvt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedLanguage = new EventEmitter<number>();

  themes: string [] = [Themes['DVT-DARK'], Themes['DVT-LIGHT']];
  languages: string[] = [MENU_CONSTANTS.MENU_LANGUAGES_STRING.English, MENU_CONSTANTS.MENU_LANGUAGES_STRING.Afrikaans];

  constructor(
    private gameStore: Store<GameState>,
    private themeService: ThemeToggleService
    ) { }

  ngOnInit(): void {
  }

  changeSelectedTheme(selection: string): void {
    this.themeService.changeTheme(selection);
  }

  changeSelectedLanguge(selection: string): void {
    this.gameStore.dispatch(setLanguagePreference({ languageID: MENU_CONSTANTS.MENU_LANGUAGES[selection] }));
  }

}
