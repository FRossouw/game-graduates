import { Component, OnInit } from '@angular/core';
import { MENU_BUILDER, MENU_ENGLISH, MENU_TEXT } from '../constants/menu';
import { ThemeToggleService } from 'src/app/Utils/Theme/theme-toggle.service';
import { Randomizer } from 'src/app/Utils/Methods';
import { Menu } from '../models/iMenu';

@Component({
  selector: 'dvt-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menu: Menu[] = [];

  dvt = 'DVT';
  playGame = 'PLAY GAME';
  leaderboards = 'LEADERBOARDS';
  getInTouch = 'GET IN TOUCH';
  tutorial = 'TUTORIAL';
  makeAnImpact = 'MAKE AN IMPACT';
  options = 'OPTIONS';

  constructor(private themeService: ThemeToggleService) { }

  ngOnInit(): void {
    this.themeService.setThemeOnStart();
    this.themeService.toggle();
    this.getRandomMenu();
  }

  private getRandomMenu(): void {
    this.randomizeMenuSelection();
    this.decipherMenu();
    this.decipherColours();
    console.log(this.menu);
  }

  private randomizeMenuSelection(): void {
    const index = Randomizer(MENU_ENGLISH.length);
    const selectedMenu = MENU_ENGLISH[index];
    const selectedText = MENU_TEXT[index];
    this.dvt = selectedText.dvt;
    this.playGame = selectedText.playGame;
    this.leaderboards = selectedText.leaderboards;
    this.getInTouch = selectedText.getInTouch;
    this.tutorial = selectedText.tutorial;
    this.makeAnImpact = selectedText.makeAnImpact;
    this.options = selectedText.options;
    selectedMenu.forEach(i => {
      const item: Menu = { character: i };
      this.menu.push(item);
    });
  }

  private decipherMenu(): void {
    this.menu.forEach(char => {
      switch (char.character) {
        case MENU_BUILDER.dvt:
          if (this.dvt.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.dvt);
            this.menu[index].character = this.dvt[0];
            this.menu[index].anchor = 'dvt';
            this.dvt = this.removeFirstLetter(this.dvt);
          }
          break;
        case MENU_BUILDER.play_game:
          if (this.playGame.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.play_game);
            this.menu[index].character = this.playGame[0];
            this.menu[index].anchor = 'play-game';
            this.playGame = this.removeFirstLetter(this.playGame);
          }
          break;
        case MENU_BUILDER.leaderboards:
          if (this.leaderboards.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.leaderboards);
            this.menu[index].character = this.leaderboards[0];
            this.menu[index].anchor = 'leaderboards';
            this.leaderboards = this.removeFirstLetter(this.leaderboards);
          }
          break;
        case MENU_BUILDER.get_in_touch:
          if (this.getInTouch.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.get_in_touch);
            this.menu[index].character = this.getInTouch[0];
            this.menu[index].anchor = 'get-in-touch';
            this.getInTouch = this.removeFirstLetter(this.getInTouch);
          }
          break;
        case MENU_BUILDER.tutorial:
          if (this.tutorial.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.tutorial);
            this.menu[index].character = this.tutorial[0];
            this.menu[index].anchor = 'tutorial';
            this.tutorial = this.removeFirstLetter(this.tutorial);
          }
          break;
        case MENU_BUILDER.make_an_impact:
          if (this.makeAnImpact.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.make_an_impact);
            this.menu[index].character = this.makeAnImpact[0];
            this.menu[index].anchor = 'make-an-impact';
            this.makeAnImpact = this.removeFirstLetter(this.makeAnImpact);
          }
          break;
        case MENU_BUILDER.options:
          if (this.options.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_BUILDER.options);
            this.menu[index].character = this.options[0];
            this.menu[index].anchor = 'options';
            this.options = this.removeFirstLetter(this.options);
          }
          break;
      }
    });
  }

  private decipherColours(): void {
    const newMenu: Menu[] = [];
    this.menu.forEach(c => {
      if (c.character === 0) {
        // For these colours do not randomize more than 10
        const colour = Randomizer(6);
        newMenu.push({ character: colour } as Menu);
      } else {
        newMenu.push(c);
      }
    });
    this.menu = newMenu;
  }

  private removeFirstLetter(word: string): string {
    if (word.length > 1) {
      const wordArray: string[] = word.split('');
      wordArray.shift();
      const newWord = wordArray.reduce((c, value) => c.concat(value));
      return newWord;
    } else { return word; }
  }

  isNumber(character: string | number): boolean {
    return typeof(character) === 'number';
  }

}
