
export interface IController {
    // Universal buttons
    start: boolean;
    options: boolean;
    theme: boolean;
    // Left buttons formerly known as arrow buttons
    leftButtonsLeft: boolean;
    leftButtonsRight: boolean;
    leftButtonsUp: boolean;
    leftButtonsDown: boolean;
    leftAnalog: boolean;
    // Right buttons formerly known as shape buttons
    rightButtonsLeft: boolean;
    rightButtonsRight: boolean;
    rightButtonsUp: boolean;
    rightButtonsDown: boolean;
    rightAnalog: boolean;
}

export const iDefaultController: IController = {
    start: false,
    options: false,
    theme: false,
    leftButtonsLeft: false,
    leftButtonsRight: false,
    leftButtonsUp: false,
    leftButtonsDown: false,
    leftAnalog: false,
    rightButtonsLeft: false,
    rightButtonsRight: false,
    rightButtonsUp: false,
    rightButtonsDown: false,
    rightAnalog: false
};
