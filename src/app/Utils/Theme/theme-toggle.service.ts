import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { setPreference } from 'src/app/Store/actions/gameActions';
import { Preference } from 'src/app/Store/models';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getPreference } from 'src/app/Store/selectors/game.Selectors';

export enum ThemeMode {
  DVTLIGHT, DVTDARK
  // DARK, LIGHT
}

export enum Themes {
  'DVT-LIGHT' = 'DVT-LIGHT',
  'DVT-DARK' = 'DVT-DARK'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService { 

  public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.DVTLIGHT);

  private preferences: Preference;

  private readonly DVT_LIGHT = 'DVT-LIGHT';
  private readonly DVT_DARK = 'DVT-DARK'

  private selectedTheme: string = 'DVT-LIGHT';

  /**
   * The default constructor for the Theme Service.
   * @param gameStore The game ngrx store.
   * @param storage The local storage service.
   */
  constructor(private gameStore: Store<GameState>) { }

  /**
   * Initialize the application theme.
   * This should be done on the start of the application.
   */
  public initializeTheme(): void {
    this.getPreferences();
    this.changeTheme(this.selectedTheme);
    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }

  /**
   * Changes the theme of the application to another provided theme.
   * @param theme The theme to change the application to.
   */
  public changeTheme(theme: string): void {
    this.removeAllThemes();
    switch (theme) {
      case 'DVT-LIGHT':
        this.setTheme(this.DVT_LIGHT, ThemeMode.DVTLIGHT);
        break;
      case 'DVT-DARK':
        this.setTheme(this.DVT_DARK, ThemeMode.DVTDARK);
        break;
      default:
        this.setTheme(this.DVT_DARK, ThemeMode.DVTDARK);
        break;
    }
  }

  /**
   * Removes all themes from the application.
   */
  private removeAllThemes(): void {
    document.body.classList.remove(this.DVT_LIGHT);
    document.body.classList.remove(this.DVT_DARK);
  }

  /**
   * Set the current theme.
   * @param themeKey The theme key name to be stored in local storage.
   * @param themeClass The theme class that needs to be assigned to the application.
   * @param themeMode The theme mode observable enum number for the theme.
   */
  private setTheme(themeClass: string, themeMode: number): void {
    this.preferences.Theme = themeClass;
    this.gameStore.dispatch(setPreference({ preference: this.preferences }));
    document.body.classList.add(themeClass);
    this.theme$.next(themeMode);
  }

  /**
   * Retrieves the current preferences from the store
   */
  private getPreferences(): void {
    this.gameStore.select(getPreference).subscribe(p => {
      this.preferences = { ...p };
    });
  }


}
