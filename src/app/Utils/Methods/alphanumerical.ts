
/**
 * Removes the first letter from a word.
 * @param word The word that needs to be shortened by with one character from the start
 * @returns The word without the first character. In cases where the word is one character long it will return the word.
 */
export function removeFirstLetterFromWord(word: string): string {
    if (word.length > 1) {
        const wordArray: string[] = word.split('');
        wordArray.shift();
        const newWord = wordArray.reduce((c, value) => c.concat(value));
        return newWord;
      } else { return word; }
}
