import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { PreferenceState } from 'src/app/State/preferences/preferences.reducer';
import { setPreference } from 'src/app/State/preferences/preferences.actions';
import { selectPreference } from 'src/app/State/preferences/preferences.selectors';
import { iKeyValue, iPreference } from '../Models';
import { ThemesAvailable } from '../Constants/themes';

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

  public availableThemes = ThemesAvailable;
  public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.DVTLIGHT);

  private preferences: iPreference;
  private currentTheme: string;

  private readonly DVT_LIGHT = 'DVT-LIGHT';
  private readonly DVT_DARK = 'DVT-DARK';

  /**
   * The default constructor for the Theme Service.
   * @param preferenceStore The preferences state store.
   */
  constructor(
    private preferenceStore: Store<PreferenceState>
  ) { }

  /**
   * Initialize the application theme.
   * This should be done on the start of the application.
   */
  public initializeTheme(): void {
    this.getPreferences();
    this.changeTheme(this.currentTheme);
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
    this.preferences.themeKey = this.extractThemeFromValue(themeClass).key;
    this.preferenceStore.dispatch(setPreference({ preference: this.preferences }));
    document.body.classList.add(themeClass);
    this.theme$.next(themeMode);
  }

  /**
   * Retrieves the current preferences from the store
   */
  private getPreferences(): void {
    this.preferenceStore.select(selectPreference).subscribe(p => {
      this.preferences = { ...p };
      console.log(p);
    });
    this.currentTheme = this.extractThemeFromKey(this.preferences.themeKey).value;
  }

  /**
   * Find a theme from an index key.
   * @param selectedThemeKey The key of the theme to be searched.
   * @returns A key value pair with the theme key and value
   */
  private extractThemeFromKey(selectedThemeKey: number): iKeyValue {
    const themeFound = ThemesAvailable.filter(themeKey => themeKey.key === selectedThemeKey)[0];
    return themeFound;
  }

  /**
   * Find a theme from a theme name.
   * @param selectedThemeValue The value (name) of the theme to be searched.
   * @returns A key value pair with the theme key and value
   */
  private extractThemeFromValue(selectedThemeValue: string): iKeyValue {
    const themeFound = ThemesAvailable.filter(themeKey => themeKey.value === selectedThemeValue)[0];
    return themeFound;
  }



}
