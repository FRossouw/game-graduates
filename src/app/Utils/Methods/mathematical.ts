
/**
 * Is a provided character a number.
 * @param character The character that needs to be evaluated.
 * @returns Whether the charater is a number (true) or (false) if not.
 */
export function isCharacterNumber(character: string | number): boolean {
    return typeof(character) === 'number';
}
