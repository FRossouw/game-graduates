import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// State Management
import { Store } from '@ngrx/store';
import { setMenuSelection } from 'src/app/Store/actions/gameActions';
import { GameState } from 'src/app/Store/reducers/game.Reducer';
import { getMenuSelection, getPreference } from 'src/app/Store/selectors/game.Selectors';
import { MenuSelection, Preference } from 'src/app/Store/models';
// Methods and Configs
import { Mathematical } from 'src/app/Utils/Methods';
import { MENU_MECHANICS, MENU_MODELS } from './config/index';

@Component({
  selector: 'dvt-menu-word-puzzle',
  templateUrl: './menu-word-puzzle.component.html',
  styleUrls: ['./menu-word-puzzle.component.scss']
})
export class MenuWordPuzzleComponent implements OnInit {

  menu: MENU_MODELS.Menu[] = [];
  menuWordPuzzle: MENU_MECHANICS.MenuWordPuzzleInterface;
  menuSelection: MenuSelection;
  preference: Preference;

  constructor(
    private router: Router,
    private gameStore: Store<GameState>
    ) { }

  ngOnInit(): void {
    this.gameStore.select(getMenuSelection).subscribe(m => {
      this.menuSelection = { ...m };
    });
    this.gameStore.select(getPreference).subscribe(p => {
      this.preference = { ...p };
      this.menuWordPuzzle = new MENU_MECHANICS.MenuWordPuzzleInterface(6, this.preference.language);
      this.menu = this.menuWordPuzzle.menu;
    });
  }

  isNumber(character: string | number): boolean {
    return Mathematical.isCharacterNumber(character);
  }

  blockClick(block: MENU_MODELS.Menu): void {
    switch (block.anchor) {
      case 'dvt':
        window.open('https://www.dvt.co.za/', '_blank');
        break;
      case 'play-game':
        this.router.navigate([block.anchor]);
        break;
      case 'leaderboards':
        this.router.navigate([block.anchor]);
        break;
      case 'get-in-touch':
        this.router.navigate([block.anchor]);
        break;
      case 'tutorial':
        this.router.navigate([block.anchor]);
        break;
      case 'make-an-impact':
        window.open('https://www.dvt.co.za/our-values', '_blank');
        break;
      case 'play-game':
        this.router.navigate([block.anchor]);
        break;
      case 'options':
        this.menuSelection.options = true;
        this.gameStore.dispatch(setMenuSelection({ menu: this.menuSelection }));
        break;

      default:
        break;
    }

  }

}
