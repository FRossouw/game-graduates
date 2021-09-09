import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPreference } from 'src/app/Store/actions/gameActions';
import { Preference } from 'src/app/Store/models';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getPreference } from 'src/app/Store/selectors/game.Selectors';
import { Themes, ThemeToggleService } from 'src/app/Utils/Theme/theme-toggle.service';
import { MENU_CONSTANTS } from '../Utils/menu-word-puzzle';

@Component({
  selector: 'dvt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedLanguage = new EventEmitter<number>();

  themes: string[] = [Themes['DVT-DARK'], Themes['DVT-LIGHT']];
  languages: string[] = [MENU_CONSTANTS.MENU_LANGUAGES_STRING.English, MENU_CONSTANTS.MENU_LANGUAGES_STRING.Afrikaans];
  preference: Preference;

  constructor(
    private gameStore: Store<GameState>,
    private themeService: ThemeToggleService
  ) { }

  ngOnInit(): void {
    
    this.gameStore.select(getPreference).subscribe(p => {
      this.preference = {...p};
    });
  }

  changeSelectedTheme(selection: string): void {
    this.themeService.changeTheme(selection);
    this.preference.Theme = selection;
    this.gameStore.dispatch(setPreference({ preference: this.preference }));
  }

  changeSelectedLanguge(selection: string): void {
    this.preference.Language = MENU_CONSTANTS.MENU_LANGUAGES[selection];
    this.gameStore.dispatch(setPreference({ preference: this.preference }));
  }

}
