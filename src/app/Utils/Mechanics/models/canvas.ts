export interface Canvas {
    htmlID?: string;
    canvas?: any;
    context2D?: CanvasRenderingContext2D;
    positions?: {
        topX: number,
        topY: number,
    };
    margin?: {
        width: number,
        height: number
    };
}
