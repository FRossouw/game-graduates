import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MENU_CONSTANTS } from './Shared/Utils/menu-word-puzzle';
import { setLanguagePreference } from './Store/actions/gameActions';
import { GameState } from './Store/reducers/game.Reducer';
import { ThemeToggleService } from './Utils/Theme/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-graduates';

  constructor(
    private themeService: ThemeToggleService,
    private gameStore: Store<GameState>,
  ) { }

  ngOnInit(): void {
    this.gameStore.dispatch(setLanguagePreference({ languageID: MENU_CONSTANTS.MENU_LANGUAGES.English }));
    this.themeService.initializeTheme();
  }

}
