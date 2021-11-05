import { iMenuItem } from "../Models";

export const MenuMainMenu: iMenuItem[] = [
    { index: 0, name: 'Play Game', link: 'play-game', selected: true },
    { index: 1, name: 'Tutorial', link: 'tutorial', selected: false },
    { index: 2, name: 'Leaderboards', link: 'leaderboards', selected: false },
    { index: 3, name: 'Contact Us', link: 'contact-us', selected: false },
    { index: 4, name: 'Options', link: 'options', selected: false }
];

export const MenuOptions: iMenuItem[] = [
    { index: 0, name: 'Keyboard Bindings', link: 'main-menu', selected: true },
    { index: 1, name: 'Character Settings', link: 'main-menu', selected: false },
    { index: 2, name: 'Main Menu', link: 'main-menu', selected: false }
];

export const MenuContactUs: iMenuItem[] = [
    { index: 0, name: 'Telephone', link: 'main-menu', selected: true },
    { index: 0, name: 'Email', link: 'main-menu', selected: true },
    { index: 1, name: 'Website', link: 'main-menu', selected: false },
    { index: 1, name: 'Offices', link: 'main-menu', selected: false },
    { index: 2, name: 'Main Menu', link: 'main-menu', selected: false }
];
