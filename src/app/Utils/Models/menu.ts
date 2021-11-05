
export interface iMenu {
    contactUs: boolean;
    leaderboards: boolean;
    mainGame: boolean;
    mainMenu: boolean;
    options: boolean;
    tutorial: boolean;
}

export const iDefaultMenu: iMenu = {
    contactUs: false,
    leaderboards: false,
    mainGame: false,
    mainMenu: false,
    options: false,
    tutorial: false
}

export interface iMenuItem {
    index: number;
    name: string;
    link: string;
    selected: boolean;
}
