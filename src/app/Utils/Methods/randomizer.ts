
/**
 * Randomizer returns a random number from 0 to the max input.
 * @param max Input a maximum value.
 * @param round Should the value be rounded. Defaults to true.
 * @param floor Should the value be rounded to the floor or ceiling. Defaults to floor (true).
 * @returns A random number from 0 to the max.
 */
export function Randomizer(max: number, round: boolean = true, floor: boolean = true): number {
    return round ? floor ? Math.floor(Math.random() * max) : Math.ceil(Math.random() * max) : Math.random() * max;
}