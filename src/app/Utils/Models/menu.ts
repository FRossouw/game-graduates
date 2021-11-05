
export interface IMenu {
    contactUs: boolean;
    leaderboards: boolean;
    mainGame: boolean;
    mainMenu: boolean;
    options: boolean;
    tutorial: boolean;
}

export const iDefaultMenu: IMenu = {
    contactUs: false,
    leaderboards: false,
    mainGame: false,
    mainMenu: false,
    options: false,
    tutorial: false
};

export interface IMenuItem {
    index: number;
    name: string;
    link: string;
    selected: boolean;
}
