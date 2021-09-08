
import { Alphanumerical, Randomizer } from "src/app/Utils/Methods";
import { MENU_MODELS, MENU_CONSTANTS, MENU_CONSTANTS_PUZZLES } from "./index";

export class MenuWordPuzzle {

  menu: MENU_MODELS.Menu[] = [];
  menuText = { ...MENU_CONSTANTS.MENU_ARRAY_TEXT_ENGLISH[0] };
  language: number = MENU_CONSTANTS.MENU_LANGUAGES.English;
  colours: number;

  /**
   * Constructor for a new Menu Word Puzzle Object
   * @param coloursCount The amount of colours that should be generated for empty blocks. Defaults to 10.
   * @param language The preferred language the menu should be in. Defaults to English (0).
   */
  constructor(coloursCount: number = 10, language: number = MENU_CONSTANTS.MENU_LANGUAGES.English) {
    this.colours = coloursCount <= 10 ? coloursCount : 10;
    this.language = language;
    this.getRandomMenu();
  }

  /**
   * Generate a new random menu for the application.
   * The menu's language is determined by the language the object is set to.
   */
  getRandomMenu(): void {
    this.changeLanguage(this.language);
    this.decipherMenu();
    this.decipherColours();
  }

  /**
   * Change the language of the menu.
   * @param language A numerical input for language to be selected. Defaults to English (0).
   */
  changeLanguage(language: Number): void {
    switch (language) {
      case MENU_CONSTANTS.MENU_LANGUAGES.English:
        this.randomizeMenuSelection(MENU_CONSTANTS_PUZZLES.MENU_ARRAY_ENGLISH, MENU_CONSTANTS.MENU_ARRAY_TEXT_ENGLISH);
        break;
      case MENU_CONSTANTS.MENU_LANGUAGES.Afrikaans:
        this.randomizeMenuSelection(MENU_CONSTANTS_PUZZLES.MENU_ARRAY_AFRIKAANS, MENU_CONSTANTS.MENU_ARRAY_TEXT_AFRIKAANS);
        break;
      default:
        this.randomizeMenuSelection(MENU_CONSTANTS_PUZZLES.MENU_ARRAY_ENGLISH, MENU_CONSTANTS.MENU_ARRAY_TEXT_ENGLISH);
        break;
    }
  }

  /**
   * Randomly selects a menu from a given array.
   * This is used when a language is selected.
   * @param wordPuzzlesArray An array of word puzzle menu items.
   * @param wordPuzzlesTextArray An array of word puzzle menu item texts.
   */
  private randomizeMenuSelection(wordPuzzlesArray: number[][], wordPuzzlesTextArray: {}): void {
    const index = Randomizer(wordPuzzlesArray.length);
    const selectedMenu = wordPuzzlesArray[index];
    this.menuText = { ...wordPuzzlesTextArray[index] };
    selectedMenu.forEach(i => {
      const item: MENU_MODELS.Menu = { character: i };
      this.menu.push(item);
    });
    console.log(this.menu);
  }

  /**
   * Allocates the correct text and link to each menu item.
   */
  private decipherMenu(): void {
    this.menu.forEach(char => {
      switch (char.character) {
        case MENU_CONSTANTS.MENU_BUILDER.dvt:
          if (this.menuText.dvt.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.dvt);
            this.menu[index].character = this.menuText.dvt[0];
            this.menu[index].anchor = 'dvt';
            this.menuText.dvt = Alphanumerical.removeFirstLetterFromWord(this.menuText.dvt);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.play_game:
          if (this.menuText.playGame.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.play_game);
            this.menu[index].character = this.menuText.playGame[0];
            this.menu[index].anchor = 'play-game';
            this.menuText.playGame = Alphanumerical.removeFirstLetterFromWord(this.menuText.playGame);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.leaderboards:
          if (this.menuText.leaderboards.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.leaderboards);
            this.menu[index].character = this.menuText.leaderboards[0];
            this.menu[index].anchor = 'leaderboards';
            this.menuText.leaderboards = Alphanumerical.removeFirstLetterFromWord(this.menuText.leaderboards);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.get_in_touch:
          if (this.menuText.getInTouch.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.get_in_touch);
            this.menu[index].character = this.menuText.getInTouch[0];
            this.menu[index].anchor = 'get-in-touch';
            this.menuText.getInTouch = Alphanumerical.removeFirstLetterFromWord(this.menuText.getInTouch);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.tutorial:
          if (this.menuText.tutorial.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.tutorial);
            this.menu[index].character = this.menuText.tutorial[0];
            this.menu[index].anchor = 'tutorial';
            this.menuText.tutorial = Alphanumerical.removeFirstLetterFromWord(this.menuText.tutorial);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.make_an_impact:
          if (this.menuText.makeAnImpact.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.make_an_impact);
            this.menu[index].character = this.menuText.makeAnImpact[0];
            this.menu[index].anchor = 'make-an-impact';
            this.menuText.makeAnImpact = Alphanumerical.removeFirstLetterFromWord(this.menuText.makeAnImpact);
          }
          break;
        case MENU_CONSTANTS.MENU_BUILDER.options:
          if (this.menuText.options.length > 0) {
            const index = this.menu.findIndex(x => x.character === MENU_CONSTANTS.MENU_BUILDER.options);
            this.menu[index].character = this.menuText.options[0];
            this.menu[index].anchor = 'options';
            this.menuText.options = Alphanumerical.removeFirstLetterFromWord(this.menuText.options);
          }
          break;
      }
    });
  }

  /**
   * Allocates random colours to the grid where no text is.
   */
  private decipherColours(): void {
    const newMenu: MENU_MODELS.Menu[] = [];
    this.menu.forEach(c => {
      if (c.character === 0) {
        const colour = Randomizer(this.colours);
        newMenu.push({ character: colour } as MENU_MODELS.Menu);
      } else {
        newMenu.push(c);
      }
    });
    this.menu = newMenu;
  }

}